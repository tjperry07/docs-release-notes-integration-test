// ./plugins/webpackPolyfillPlugin.js
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function (context, options) {
  return {
    name: 'webpack-polyfill-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [new NodePolyfillPlugin()],
      };
    },
  };
};