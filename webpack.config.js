const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [{
  mode: "development",
  entry: {
    button: "./packages/button/index.js",
    dropdown: "./packages/dropdown/index.js",
    textfield: "./packages/textfield/index.js",
    icon: "./packages/icon/index.js",
    utils: "./packages/utils/index.js"
  },
  output: {
    filename(pathData) {
      let dir = pathData.chunk.entryModule.rawRequest
      dir = dir.substring(0, dir.lastIndexOf("/"));
      return dir + "/dist/index.js"
    },
    path: path.resolve(__dirname)
  },
  watchOptions: {
    ignored: ['node_modules/**', 'packages/**/dist/**']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'raw-loader',
          'resolve-url-loader',
          'sass-loader'
        ],
      },
    ],
  }
}, {
  mode: "development",
  entry: "./packages/theme/styles.scss",
  output: {
    path: path.resolve(__dirname, 'packages/theme/dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ]
}]