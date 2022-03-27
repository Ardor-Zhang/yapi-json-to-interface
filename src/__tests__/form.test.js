import { transformForm } from "../index.js";

test('transformForm', () => {
  const form = [
    {
      "required": "1",
      "_id": "61c2a57a84f513686bb97560",
      "name": "verifyStatus",
      "type": "text",
      "example": "0",
      "desc": "审核状态（0：全部、-1:封号，5：待审核，10:审核通过,20:审核驳回：）"
    },
    {
      "required": "0",
      "_id": "61c2a57a84f513437eb9755f",
      "name": "userCommonId",
      "type": "text",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "61c2a57a84f513451bb9755e",
      "name": "nickName",
      "type": "text",
      "example": "",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "61c2a57a84f5134377b9755d",
      "name": "authorName",
      "type": "text",
      "example": "",
      "desc": ""
    },
    {
      "required": "1",
      "_id": "61c2a57a84f51369ecb9755c",
      "name": "pageNumber",
      "type": "text",
      "example": "",
      "desc": "1"
    },
    {
      "required": "1",
      "_id": "61c2a57a84f5137070b9755b",
      "name": "pageSize",
      "type": "text",
      "example": "",
      "desc": "10"
    }
  ];
  
  const res = `interface Form {
    /** 审核状态（0：全部、-1:封号，5：待审核，10:审核通过,20:审核驳回：） */
    verifyStatus: string;
    userCommonId?: string;
    nickName?: string;
    authorName?: string;
    /** 1 */
    pageNumber: string;
    /** 10 */
    pageSize: string;
}`
  const ts = transformForm(form, 'Form');
  expect(ts).toBe(res);
})

