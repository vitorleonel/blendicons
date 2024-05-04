import playwright from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

import { getIconContent, getIconName } from './utils/misc';

const baseUrl = 'https://blendicons.com/free-icons';
const iconStyle = process.env.ICON_STYLE || 'regular';
const amountOfPages = 48;
const amountPerPage = 500;
const iconElementSelector = 'section.icons_list_section button img';

(async () => {
  const browser = await playwright.chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const iconTemplate = await fs.readFile(
    path.resolve(__dirname, 'templates', 'icon.template'),
    { encoding: 'utf-8' },
  );

  const icons = [];

  for (let index = 1; index <= amountOfPages; index++) {
    console.log(`Processing ${iconStyle} page ${index} / ${amountOfPages}.`);

    await page.goto(
      `${baseUrl}/${iconStyle}?limit=${amountPerPage}&page=${index}`,
    );
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
        path.resolve(__dirname, `icons`, `${iconName}.tsx`),
        iconTemplate
          .replace('__ICON_NAME__', iconName)
          .replace('__ICON_CONTENT__', iconContent),
        { encoding: 'utf-8' },
      );

      icons.push(iconName);
    }
  }

  await fs.writeFile(
    path.resolve(__dirname, `icons`, `index.ts`),
    icons.map((icon) => `export * from './${icon}';`).join('\n'),
    { encoding: 'utf-8' },
  );

  await browser.close();
})();
