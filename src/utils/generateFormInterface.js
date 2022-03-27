import { formatRow, formatDescription } from "./format";

export function generateFormInterface(form = [], depth = 1) {
  let result = `{\n`;
  for (let i = 0; i < form.length; i++) {
    const item = form[i];
    result += formatDescription(item, depth);

    const flag = item.required === '0' ? '?' : '';
    result += formatRow(`${item.name}${flag}: string;`, depth);
  };
  return result + '}';
}
