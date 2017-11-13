let webpackModule;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const PostcssCalc = require('postcss-calc');

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
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]',
              camelCase: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: (loader) => [
                Autoprefixer({
                  browsers: ['last 2 versions', '> 5%'],
                  cascade: false
                }),
                PostcssCalc()
              ]
            }
          }
        ]
      })
    }
  ]
};

module.exports = webpackModule;
