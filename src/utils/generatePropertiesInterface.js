import { mapPrimitiveType, formatRow, formatDescription } from "./formatRow.js";

export function generatePropertiesInterface(schema = {}, depth = 1) {
  const primitiveType = mapPrimitiveType(schema.type);
  if (primitiveType) return primitiveType;

  if (schema.type == "object") {
    const prefix = "{";
    const suffix = "}";
    let body = "";
    
    const properties = schema.properties ?? {};
    const hasProperties = Boolean(Object.keys(properties).length);

    if (hasProperties) body += "\n";

    for (const property in properties) {
      const child = properties[property];
      
      body += formatDescription(child, depth);
      
      const requiredProps = schema.required ?? [];
      const key = `${property}${requiredProps.includes(property) ? '?' : ''}`;
      const type = generatePropertiesInterface(child, depth + 1);
      body += formatRow(`${key}: ${type};`, depth);
    }
    
    let newline = hasProperties ? "    ".repeat(depth - 1) : "";
    body += `${newline}`;

    return prefix + body + suffix;
  }

  if (schema.type == "array") {
    return generatePropertiesInterface(schema.items, depth) + "[]";
  }

  return "any";
}
