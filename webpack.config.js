const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    button: "./packages/button/",
    dropdown: "./packages/dropdown/"
  },
  output: {
    filename(pathData) {
      const dir = pathData.chunk.entryModule.rawRequest
      return dir + "dist/index.js"
    },
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  }
};