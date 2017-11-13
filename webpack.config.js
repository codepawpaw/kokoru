module.exports = function(env) {
  const path = require('path');

  let webpackModule, webpackPlugin, webpackResolve;

  if(!env) {
      env = 'dev';
  }

  webpackModule = require(`./webpack.module.config.${env}.js`);
  webpackPlugin = require(`./webpack.plugin.config.${env}.js`);
  webpackResolve = require('./webpack.resolve.config.js');

  return {
      entry: './public/index.js',
      output: {
          path: path.resolve(__dirname, 'public/bin'),
          filename: 'index.bundle.js'
      },
      watch: true,
      module: webpackModule,
      plugins: webpackPlugin,
      resolve: webpackResolve
  };
}