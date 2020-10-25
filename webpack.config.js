const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [{
  mode: "development",
  entry: {
    button: "./packages/button/index.ts",
    checkbox: "./packages/checkbox/index.js",
    dropdown: "./packages/dropdown/index.js",
    icon: "./packages/icon/index.js",
    menu: "./packages/menu/index.js",
    tabs: "./packages/tabs/index.js",
    textfield: "./packages/textfield/index.js",
    utils: "./packages/utils/index.js"
  },
  output: {
    filename(pathData) {
      let dir = pathData.chunk.entryModule.rawRequest
      dir = dir.substring(0, dir.lastIndexOf("/"));
      return dir + "/dist/index.js"
    },
    path: path.resolve(__dirname),
    libraryTarget: 'commonjs-module'
  },
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: ['node_modules/**', 'packages/**/dist/**']
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
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