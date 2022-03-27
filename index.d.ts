type YapiType = 'object' | 'array' | 'integer' | 'number' | 'string' | 'boolean';

interface YapiProperities {
  [key: string] : YapiSchema
}

interface YapiSchema {
  type: YapiType,
  properties?: YapiProperities,
  required: string[],
}

interface JsonToInterface {
  [key: string]: string
}

interface YapiForm {
  required?: "0" | "1",
  name: string,
  desc?: string,
}

interface YapiRaw {
  [key: string]: any
}

export function transformSchema(schema: YapiSchema, interfaceName?: string): JsonToInterface

export function transformForm(queryArray: YapiForm, interfaceName?: string): JsonToInterface

export function transformRaw(queryArray: YapiRaw, interfaceName?: string): JsonToInterface

