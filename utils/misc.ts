export const getIconName = (text: string): string => {
  const specialCharsMap: Record<string, string> = {
    á: 'a',
    à: 'a',
    ä: 'a',
    â: 'a',
    é: 'e',
    è: 'e',
    ë: 'e',
    ê: 'e',
    í: 'i',
    ì: 'i',
    ï: 'i',
    î: 'i',
    ó: 'o',
    ò: 'o',
    ö: 'o',
    ô: 'o',
    ú: 'u',
    ù: 'u',
    ü: 'u',
    û: 'u',
    ñ: 'n',
    ç: 'c',
  };

  const numberTextMap: Record<string, string> = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
  };

  return text
    .toLowerCase()
    .replace('Icon Free Download', '')
    .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`€™“©]/g, '')
    .replace(/[áàäâéèëêíìïîóòöôúùüûñç]/g, (matched) => specialCharsMap[matched])
    .replace(/\d/g, (matched) => numberTextMap[matched])
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .map((word) => word.trim())
    .join('');
};

export const getIconContent = (content: string): string => {
  return content
    .replace(/<\?xml\s.*?\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<style>.*<\/style>/gs, '')
    .replace(/class="/g, 'className="')
    .replace('<svg', '<svg width={size} height={size}')
    .replace('style="enable-background:new 0 0 24 24;"', '')
    .replace('xmlns:xlink', 'xmlnsXlink')
    .replace('xml:space', 'xmlSpace');
};
