const path = require('path');

module.exports = {
  configureWebpack: (config) => {
    config.devtool = 'cheap-module-source-map';
},
    chainWebpack:config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title = 'file-manager'
            return args
          });
      }
}