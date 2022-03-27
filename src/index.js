import { formatDescription } from "./utils/format";
import { mapPrimitiveType } from "./utils/constants";
import { generateSchemaInterface } from "./utils/generateSchemaInterface.js";
import { generateRawInterface } from "./utils/generateRawInterface.js";
import { generateFormInterface } from "./utils/generateFormInterface.js";

function generate(rootSchema, interfaceName) {
  let result = "";
  result += formatDescription(rootSchema);

  if (rootSchema.type == "object") {
    result += `interface ${interfaceName} ${generateSchemaInterface(rootSchema)}\n`;
  } else if (rootSchema.type == "array") {
    result +=
      `interface ${interfaceName} {\n${formatDescription(rootSchema.items, 1)}    [index: number]: ${generateSchemaInterface(rootSchema.items, 2)};\n}\n`
  } else {
    const type = mapPrimitiveType(rootSchema.type);
    result += `type ${interfaceName} = ${type};\n`
  }

  return result;
};

export function transformSchema(schema, interfaceName="Result") {
  return generate(schema, interfaceName);
}

export function transformForm(form, interfaceName="Result") {
  return `interface ${interfaceName} ${generateFormInterface(form, 1)}` ;;
}

export function transformRaw(raw, interfaceName="Result") {
  return `interface ${interfaceName} ${generateRawInterface(raw, 1)}` ;
}
