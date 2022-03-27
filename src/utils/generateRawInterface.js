import { mapPrimitiveTypeString } from "./constants";
import { formatRow, formatDescription } from "./format";
const ma = {
  'String': 'string',
  'Number': 'number',
  'Boolean': 'boolean',
}

function getType(variable) {
  return Object.prototype.toString.call(variable).replace(/^\[object (\w+)\]$/, '$1');
};

export function generateRawInterface(raw = {}, depth = 1) {
  const type = getType(raw);
  console.log(type);
  const primitiveType = mapPrimitiveTypeString(type);
  if (primitiveType) return primitiveType;

  if (type === 'Object') {
    const prefix = "{\n";
    const suffix = "}";
    let body = "";

    for (const key in raw) {
      const value = raw[key];
      
      body += formatDescription(value, depth);
      const valueType = generateRawInterface(value, depth + 1);
      body += formatRow(`${key}: ${valueType};`, depth);
    }
    body += " ".repeat(4).repeat(depth - 1);
    return prefix + body + suffix;
  }

  if (type === "Array") {
    return generateRawInterface(raw[0], depth) + "[]";
  }

  return "any";
}
