module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    // proxy: { '/api': { target: process.env.API_BASE_URL } },
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:7071',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableLegacy: false,
    },
  },
}
