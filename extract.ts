import { Cluster } from 'playwright-cluster';
import fs from 'node:fs/promises';
import path from 'node:path';

import { getIconContent, getIconName } from './utils/misc';

const baseUrl = 'https://blendicons.com/free-icons';
const iconStyle = process.env.ICON_STYLE || 'regular';
const amountOfPages = 240;
const amountPerPage = 100;
const iconElementSelector = 'section.icons_list_section button img';

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 10,
    playwrightOptions: {
      headless: true,
    },
  });

  const iconTemplate = await fs.readFile(
    path.resolve(__dirname, 'templates', 'icon.template'),
    { encoding: 'utf-8' },
  );

  await fs.mkdir(path.resolve(__dirname, `icons`, iconStyle), {
    recursive: true,
  });

  await cluster.task(async ({ page, data: url }) => {
    console.log(`Processing ${url}`);

    await page.goto(url);
    await page.waitForSelector(iconElementSelector);

    const pageIconElements = await page.locator(iconElementSelector).all();

    for (let index = 0; index < pageIconElements.length; index++) {
      const pageIconElement = pageIconElements[index];

      const elementAlt = await pageIconElement.getAttribute('alt');
      const elementSrc = await pageIconElement.getAttribute('src');

      if (!elementAlt || !elementSrc) {
        throw new Error('Unable to get icon alt or src.');
      }

      const iconName = getIconName(elementAlt);
      const iconContent = getIconContent(
        await (await fetch(elementSrc)).text(),
      );

      await fs.writeFile(
        path.resolve(__dirname, `icons`, iconStyle, `${iconName}.tsx`),
        iconTemplate
          .replace('__ICON_ORIGNAL_NAME__', elementAlt)
          .replace('__ICON_NAME__', iconName)
          .replace('__ICON_CONTENT__', iconContent),
        { encoding: 'utf-8' },
      );
    }
  });

  for (let index = 1; index <= amountOfPages; index++) {
    cluster.queue(
      `${baseUrl}/${iconStyle}?limit=${amountPerPage}&page=${index}`,
    );
  }

  await cluster.idle();
  await cluster.close();
})();
