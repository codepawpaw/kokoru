const path = require('path');

let webpackModule;

webpackModule = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [ 'env', { spec: true } ],
            ['react']
          ],
          plugins: ["transform-object-rest-spread"]
        },
      }
    }
  ]
};

webpackResolve = (
  {
    alias: {
      containers: path.resolve(__dirname, "public/containers/")
    }
  }
);

module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'public/bin'),
        filename: 'index.bundle.js'
    },
    watch: true,
    module: webpackModule,
    resolve: webpackResolve
    
};