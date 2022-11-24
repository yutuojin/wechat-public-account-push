/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx65ed5f4e79597cf3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fa9ddd01ce16c71c0dff639b7f63e513',

  PROVINCE: '昆明',
  CITY: '嵩明',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Yu',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZ-s-5l-ZC_TC-HmbtBfNEPowWno',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'NeWJcTqTtOW0Y2nqYTu3g46IlFTILuJEY5YpVgTpaW8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-22',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2003', date: '04-22',
        },
  ],

}

module.exports = USER_CONFIG

