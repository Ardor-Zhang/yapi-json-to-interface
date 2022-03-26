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

export function transform(source: YapiJson, interfaceName?: string): JsonToInterface

interface r {
  code: number;
  data: {
      /** 推广计划列表 */
      list?: {
          /** 广告组ID */
          adgroup_id?: number;
          /** 广告组名称 */
          adgroup_name?: string;
          /** 计划ID */
          campaign_id?: string;
          /** 推广目标 1=安卓下载 2=iOS下载 3=网页推广(未启用) 4=线索搜集（端游及其他非下载类） 5=新游预约 */
          promoted_type?: number;
          /** 应用名称 */
          game_name?: string;
          /** 媒体名称 */
          med_name?: string;
      }[];
  };
  msg: string;
  trace_id: string;
}