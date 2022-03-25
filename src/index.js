import { mapPrimitiveType, formatDescription } from "./utils/formatRow.js";
import { generatePropertiesInterface } from "./utils/generatePropertiesInterface.js";

function generate(rootSchema, interfaceName) {
  let result = "";
  result += formatDescription(rootSchema);

  if (rootSchema.type == "object") {
    result += `interface ${interfaceName} ${generatePropertiesInterface(rootSchema)}\n`;
  } else if (rootSchema.type == "array") {
    result +=
      `interface ${interfaceName} {\n${formatDescription(rootSchema.items, 1)}    [index: number]: ${generatePropertiesInterface(rootSchema.items, 2)};\n}\n`
  } else {
    const type = mapPrimitiveType(rootSchema.type);
    result += `type ${interfaceName} = ${type};\n`
  }

  return result;
};

export function transform(source, interfaceName="Result") {
  return generate(source, interfaceName);
}
