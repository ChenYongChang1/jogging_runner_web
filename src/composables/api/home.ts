// 网站首页-分类列表
export const getCategory = async () => {
  const result = await useFetchGet("/api/jogging/wb/category");
  return result.data;
  // return {
  //   code: 0,
  //   msg: "",
  //   show_err: false,
  //   timestamp: 1740450777,
  //   data: [
  //     {
  //       id: 1,
  //       name: "入门与技巧",
  //       BackGroup: "https://static.chaomanpao.com",
  //       icon: "https://static.chaomanpao.com",
  //       buttonColor: "#3A6BEF",
  //       appId: "",
  //     },
  //     {
  //       id: 2,
  //       name: "超慢跑装备",
  //       BackGroup: "https://static.chaomanpao.com",
  //       icon: "https://static.chaomanpao.com",
  //       buttonColor: "#FFB648",
  //       appId: "",
  //     },
  //     {
  //       id: 3,
  //       name: "健康与安全",
  //       BackGroup: "https://static.chaomanpao.com",
  //       icon: "https://static.chaomanpao.com",
  //       buttonColor: "#8995FD",
  //       appId: "",
  //     },
  //     {
  //       id: 4,
  //       name: "运动与营养",
  //       BackGroup: "https://static.chaomanpao.com",
  //       icon: "https://static.chaomanpao.com",
  //       buttonColor: "#61CD57",
  //       appId: "",
  //     },
  //     {
  //       id: 5,
  //       name: "视频与音乐",
  //       BackGroup: "https://static.chaomanpao.com",
  //       icon: "https://static.chaomanpao.com",
  //       buttonColor: "",
  //       appId: "",
  //     },
  //   ],
  //   count: 0,
  //   version: 0,
  // }.data;
};

// 搜索/分类的接口 首页列表也是这个
export const getSearchInfo = async (
  params: {
    alias?: string;
    keyword?: string;
    page?: number;
  },
  options: { ssr: boolean }
) => {
  const result = await useFetchGet("/api/jogging/wb/article", params, options);

  return result.data.value?.data || {};
  // return {
  //   code: 0,
  //   msg: "",
  //   show_err: false,
  //   timestamp: 1740469967,
  //   data: {
  //     page: params.page,
  //     totalPage: 10,
  //     list: [
  //       {
  //         id: 1,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 2,
  //         visitNum: 1000,
  //       },
  //       {
  //         id: 2,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1001,
  //       },
  //       {
  //         id: 3,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1002,
  //       },
  //       {
  //         id: 4,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1003,
  //       },
  //       {
  //         id: 5,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1004,
  //       },
  //       {
  //         id: 6,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1005,
  //       },
  //       {
  //         id: 7,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1006,
  //       },
  //       {
  //         id: 8,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1007,
  //       },
  //       {
  //         id: 9,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1008,
  //       },
  //       {
  //         id: 10,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1009,
  //       },
  //       {
  //         id: 11,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1010,
  //       },
  //       {
  //         id: 12,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1011,
  //       },
  //       {
  //         id: 13,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1012,
  //       },
  //       {
  //         id: 14,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1013,
  //       },
  //       {
  //         id: 15,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1014,
  //       },
  //       {
  //         id: 16,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1015,
  //       },
  //       {
  //         id: 17,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1016,
  //       },
  //       {
  //         id: 18,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1017,
  //       },
  //       {
  //         id: 19,
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1018,
  //       },
  //     ],
  //     lasts: [],
  //     categories: [
  //       {
  //         id: 'xxx',
  //         name: '1级分类',
  //         childs: [
  //           {
  //             id: '123',
  //             name: '二级分类名'
  //           }
  //         ]
  //       }
  //     ],
  //   },
  //   count: 0,
  //   version: 0,
  // }.data;
};
// /jogging/wb/article/statistics/{id}
export const excuteStatistics = async (id: string) => {
  const result = await useFetchGet(`/api/jogging/wb/article/statistics/${id}`);
  return result;
};

export const resetStatistics = async (ids: string[]) => {
  if (!ids?.length) return {};
  //
  const result = await useFetchGet(
    `/api/jogging/wb/article/statistics/${ids.join(",")}`
  );
  
  return result.data?.value?.data || {}
};

export const getArticleInfo = async (id: string) => {
  const result = await useFetchGet(`/api/jogging/wb/article/${id}`);
  return result.data.value?.data;
  // return {
  //   code: 0,
  //   msg: "",
  //   show_err: false,
  //   timestamp: 1740475063,
  //   data: {
  //     id: "1",
  //     title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //     desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //     keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //     cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //     isVideo: 1,
  //     visitNum: 1000,
  //     content:
  //       "<div>\n\t\t<div>\n\t\t<h1>超慢跑三步骤</h1> <h2>🏃 基础要点</h2> <ul> <li>步幅：比走路小一半</li> <li>速度：每小时5-6公里</li> <li>呼吸：鼻子吸气，嘴巴呼气</li> </ul> <h2>⏱️ 每日训练</h2> <ul> <li>新手：15分钟/天 × 3天</li> <li>适应后：30分钟/天 × 5天</li> </ul> <h2>💡 注意事项</h2> <ul> <li>饭后1小时再开始</li> <li>穿缓冲好的运动鞋</li> <li>运动后做拉伸</li> </ul>\n\t\t</div>\n\t\t##insert_goods##\n\t</div>",
  //     lasts: [
  //       {
  //         id: "D5kSp7ne6Og4KDkxcesp+g==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1000,
  //       },
  //       {
  //         id: "c0mpKDa+Ccus1A3QYDe42Q==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1001,
  //       },
  //       {
  //         id: "5hMXN11bax2UcovvRj4YGQ==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1002,
  //       },
  //       {
  //         id: "yctco0sSfFqQ0TWCA2gHDA==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1003,
  //       },
  //       {
  //         id: "1t8DxznV1vDUZyUpZYx2tw==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1004,
  //       },
  //     ],
  //     categories: [
  //       {
  //         id: 1,
  //         name: "入门与技巧",
  //         pathName: "",
  //         backGroup: "https://static.chaomanpao.comcategory/cover/1.webp",
  //         icon: "https://static.chaomanpao.comcategory/cover/book.webp",
  //         buttonColor: "#3A6BEF",
  //         childs: [
  //           {
  //             id: 6,
  //             name: "基础姿势",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 7,
  //             name: "节奏把控",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 8,
  //             name: "初跑计划",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         name: "超慢跑装备",
  //         pathName: "",
  //         backGroup: "https://static.chaomanpao.comcategory/cover/2.webp",
  //         icon: "https://static.chaomanpao.comcategory/cover/shoe.webp",
  //         buttonColor: "#FFB648",
  //         childs: [
  //           {
  //             id: 9,
  //             name: "超慢跑垫子",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 10,
  //             name: "跑鞋选择",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 13,
  //             name: "运动服饰",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 14,
  //             name: "辅助装备",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         name: "健康与安全",
  //         pathName: "",
  //         backGroup: "https://static.chaomanpao.comcategory/cover/3.webp",
  //         icon: "https://static.chaomanpao.comcategory/cover/healthy.webp",
  //         buttonColor: "#8995FD",
  //         childs: [
  //           {
  //             id: 15,
  //             name: "运动损伤预防",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 16,
  //             name: "身体状态评估",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 17,
  //             name: "应急处理",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //         ],
  //       },
  //       {
  //         id: 4,
  //         name: "运动与营养",
  //         pathName: "",
  //         backGroup: "https://static.chaomanpao.comcategory/cover/4.webp",
  //         icon: "https://static.chaomanpao.comcategory/cover/nutrition.webp",
  //         buttonColor: "#61CD57",
  //         childs: [
  //           {
  //             id: 18,
  //             name: "饮食搭配",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 19,
  //             name: "营养补充",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 20,
  //             name: "水份管理",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //         ],
  //       },
  //       {
  //         id: 5,
  //         name: "视频与音乐",
  //         pathName: "",
  //         backGroup: "",
  //         icon: "",
  //         buttonColor: "",
  //         childs: [
  //           {
  //             id: 21,
  //             name: "超慢跑教学视频",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 22,
  //             name: "超慢跑音乐",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //           {
  //             id: 23,
  //             name: "听书超慢跑",
  //             pathName: "",
  //             backGroup: "",
  //             icon: "",
  //             buttonColor: "",
  //             childs: null,
  //           },
  //         ],
  //       },
  //     ],
  //     recommends: [
  //       {
  //         id: "D5kSp7ne6Og4KDkxcesp+g==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1000,
  //       },
  //       {
  //         id: "c0mpKDa+Ccus1A3QYDe42Q==",
  //         title: "跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         desc: "这是网站描述：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         keywords: "这是关键词：跑步机间歇跑计划：跑步机如何设置间歇跑?",
  //         cover: "https://www.jirou.com/uploads/180926/148-1P92614453V04.jpg",
  //         isVideo: 1,
  //         visitNum: 1001,
  //       },
  //     ],
  //     relGoods: {
  //       title: "超慢跑跑垫-双面防滑，原地超慢跑必备",
  //       subTitle: "超慢跑跑步垫-TPE材质双面防滑，高回弹",
  //       cover:
  //         "https://img01.yzcdn.cn/upload_files/2024/10/12/Fkxp_8PmcsuaDLLlJkprJzsXaGkd.png",
  //       price: 4350,
  //       originalPrice: 8990,
  //       url: "https://shop146116480.youzan.com/v2/showcase/goods?alias=36260a88j8820u0",
  //     },
  //     recommendGoods: [
  //       {
  //         title: "超慢跑跑垫-双面防滑，原地超慢跑必备",
  //         subTitle: "超慢跑跑步垫-TPE材质双面防滑，高回弹",
  //         cover:
  //           "https://img01.yzcdn.cn/upload_files/2024/10/12/Fkxp_8PmcsuaDLLlJkprJzsXaGkd.png",
  //         price: 4350,
  //         originalPrice: 8990,
  //         url: "https://shop146116480.youzan.com/v2/showcase/goods?alias=36260a88j8820u0",
  //       },
  //       {
  //         title: "（独家）班长超慢跑同款跑步垫-PU+TPE双防滑材质",
  //         subTitle: "独家跑步专用垫，pu+tpe复合材质高效防滑，有效支撑保护脚裸",
  //         cover:
  //           "https://img01.yzcdn.cn/upload_files/2024/10/11/FtBy1OAXfht5b_sCVd__pCEl09k6.png",
  //         price: 7990,
  //         originalPrice: 9990,
  //         url: "https://shop146116480.m.youzan.com/wscgoods/detail/2xjholmxq6588zp?ump_type=seckill&ump_alias=nerm9uco&activityType=seckill",
  //       },
  //       {
  //         title: "超慢跑硅胶防滑运动护膝-中老年有效支撑，稳定髋骨",
  //         subTitle:
  //           "中老年运动护膝-升级硅胶防滑、有效减震、保护膝盖减少运动损伤",
  //         cover:
  //           "https://img01.yzcdn.cn/upload_files/2024/09/27/FhWrxTzHkL-rTB_ax8D9idduCCZq.png",
  //         price: 4600,
  //         originalPrice: 9990,
  //         url: "https://shop146116480.youzan.com/v2/showcase/goods?alias=360yd1y7bz8pk9m",
  //       },
  //     ],
  //   },
  //   count: 0,
  //   version: 0,
  // }.data;
};
