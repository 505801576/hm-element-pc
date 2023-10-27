const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  /* 关闭浏览器  报错的遮罩层 */
  devServer:{
    client:{
      overlay:false
    }
  }
})
