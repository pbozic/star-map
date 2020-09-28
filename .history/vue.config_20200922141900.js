module.exports = {
    chainWebpack: config => {
      // SVG Loader
      config.module
        .rule('svg')
        .test(/\.svg$/)
        .use('vue-svg-loader')
          .loader('vue-svg-loader')
          .end()
    }
  }