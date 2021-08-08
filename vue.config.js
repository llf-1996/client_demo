module.exports = {
  devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      // 开发环境下解决后端数据接口跨域
      proxy: {
        '/api': {
          target: 'http://localhost:8000/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
          // ws: true,  // websocket
          changOrigin: true,  // 允许跨域
          // pathRewrite: {
          //   '^/apii': '/api'//请求的时候使用这个api就可以
          // }
        }
      }
  }
}
