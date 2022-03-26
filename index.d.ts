type YapiType = 'object' | 'array' | 'integer' | 'number' | 'string' | 'boolean';

interface YapiProperities {
  [key: string] : YapiJson
}

interface YapiJson {
  type: YapiType,
  properties?: YapiProperities,
  required: string[],
}

interface JsonToInterface {
  [key: string]: string
}

interface ReqQuery {
  required?: "0" | "1",
  name: string,
  desc?: string,
}

export function transform(source: YapiJson, interfaceName?: string): JsonToInterface

export function transformQuery(queryArray: ReqQuery, interfaceName?: string): JsonToInterface
