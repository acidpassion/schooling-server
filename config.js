module.exports = { 
    serverPort: '8080', 
    // 小程序 appId 和 appSecret 
    // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
    appId: 'wx02418b3eb661e778', 
    appSecret: 'c9fc5d0cc859513afdc29a577a6ff8cd', 

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    mongoHost: 'localhost', 
    mongoPort: '27017', 
    mongoUser: 'wxadmin', 
    mongoPass: 'wxadmin', 
    mongoDb: 'wxschooling'
};