module.exports = {
  devServer: {
    proxy: {
      //   port: '8080',
      //设置跨域请求
      '/api': {
        target: 'http://localhost:9200/api',
        //跨域请求设置为tur
        changeOrigin: true,
        pathRewrite: {
          // "/api"代表”http://localhost:9200/api“
          '^/api': ''
        }
      }
    }
  }
  // lintOnSave: false // 取消 eslint 验证
}
