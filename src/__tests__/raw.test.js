import { transformRaw } from "../index.js";

test('transform', () => {
  const json = {"code":null,"msg":"","data":{"author_total":false,"account_total":9,"author_info":[{"id":"2055786217050666_225","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"111999655","account_name":"","account_type":0,"account_form":0,"account_desc":"test","create_styles":"幽默搞笑","game_ids":"","vertical_attributes":"游戏","category_ids":"","belonging_mcn":"","platform_id":1,"platform_name":"快手","fans_num":0,"account_apply_time":"2022-02-18 17:19:46","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_226","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"1119996556","account_name":"","account_type":0,"account_form":0,"account_desc":"test","create_styles":"幽默搞笑","game_ids":"","vertical_attributes":"游戏","category_ids":"","belonging_mcn":"","platform_id":1,"platform_name":"快手","fans_num":0,"account_apply_time":"2022-02-18 17:20:29","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_227","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"1119996557","account_name":"","account_type":1,"account_form":1,"account_desc":"test","create_styles":"创意剪辑","game_ids":"","vertical_attributes":"影视娱乐","category_ids":"","belonging_mcn":"","platform_id":1,"platform_name":"快手","fans_num":0,"account_apply_time":"2022-02-18 17:23:42","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_228","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"1119996558","account_name":"","account_type":0,"account_form":0,"account_desc":"test","create_styles":"幽默搞笑","game_ids":"","vertical_attributes":"游戏","category_ids":"","belonging_mcn":"","platform_id":1,"platform_name":"快手","fans_num":0,"account_apply_time":"2022-02-18 17:27:42","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_229","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"1119996558","account_name":"","account_type":1,"account_form":1,"account_desc":"test","create_styles":"创意剪辑","game_ids":"","vertical_attributes":"影视娱乐","category_ids":"","belonging_mcn":"","platform_id":1,"platform_name":"快手","fans_num":0,"account_apply_time":"2022-02-18 17:27:42","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_230","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"233","account_name":"","account_type":1,"account_form":1,"account_desc":"test","create_styles":"游戏实况","game_ids":"","vertical_attributes":"游戏","category_ids":"","belonging_mcn":"","platform_id":2,"platform_name":"抖音","fans_num":0,"account_apply_time":"2022-02-18 17:38:18","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_231","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"2334","account_name":"","account_type":1,"account_form":1,"account_desc":"test","create_styles":"游戏实况","game_ids":"","vertical_attributes":"游戏","category_ids":"","belonging_mcn":"","platform_id":2,"platform_name":"抖音","fans_num":0,"account_apply_time":"2022-02-18 17:39:56","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_233","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"2335","account_name":"","account_type":1,"account_form":1,"account_desc":"test","create_styles":"真人出镜","game_ids":"","vertical_attributes":"颜值达人","category_ids":"","belonging_mcn":"","platform_id":2,"platform_name":"抖音","fans_num":0,"account_apply_time":"2022-02-18 17:40:36","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""},{"id":"2055786217050666_268","user_common_id":"2055786217050666","nickname":"走鹤","apply_time":"2021-11-24 10:55:58","author_classify":"视频制作 导演","verify_status":10,"account_id":"1199999","account_name":"","account_type":1,"account_form":1,"account_desc":"test","create_styles":"真人出镜","game_ids":"","vertical_attributes":"颜值达人","category_ids":"","belonging_mcn":"","platform_id":1,"platform_name":"快手","fans_num":0,"account_apply_time":"2022-03-04 16:14:22","account_verify_time":"0000-00-00 00:00:00","account_status":30,"content_category":"","price":"","agreement_account_status":""}]},"time":1647584989};
  
  const res = `interface Raw {
    code: null;
    msg: string;
    data: {
        author_total: boolean;
        account_total: number;
        author_info: {
            id: string;
            user_common_id: string;
            nickname: string;
            apply_time: string;
            author_classify: string;
            verify_status: number;
            account_id: string;
            account_name: string;
            account_type: number;
            account_form: number;
            account_desc: string;
            create_styles: string;
            game_ids: string;
            vertical_attributes: string;
            category_ids: string;
            belonging_mcn: string;
            platform_id: number;
            platform_name: string;
            fans_num: number;
            account_apply_time: string;
            account_verify_time: string;
            account_status: number;
            content_category: string;
            price: string;
            agreement_account_status: string;
        }[];
    };
    time: number;
}`
  const ts = transformRaw(json, 'Raw');
  expect(ts).toBe(res);
})

