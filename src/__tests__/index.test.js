import { transform } from "../index.js";



test('transform', () => {
  const json = { "type": "object", "properties": { "code": { "type": "integer" }, "data": { "type": "object", "properties": { "list": { "type": "array", "items": { "type": "object", "properties": { "adgroup_id": { "type": "integer", "description": "广告组ID" }, "adgroup_name": { "type": "string", "description": "广告组名称" }, "campaign_id": { "type": "string", "description": "计划ID" }, "promoted_type": { "type": "integer", "description": "推广目标 1=安卓下载 2=iOS下载 3=网页推广(未启用) 4=线索搜集（端游及其他非下载类） 5=新游预约" }, "game_name": { "type": "string", "description": "应用名称" }, "med_name": { "type": "string", "description": "媒体名称" } }, "required": ["adgroup_id", "campaign_id", "promoted_type", "game_name", "med_name", "adgroup_name"] }, "description": "推广计划列表" } }, "$$ref": "#/definitions/service.CampaignQueryPageList", "required": ["list"] }, "msg": { "type": "string" }, "trace_id": { "type": "string" } } };
  const res = `interface Test {
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
`

  const ts = transform(json, 'Test');
  expect(ts).toBe(res);
})

