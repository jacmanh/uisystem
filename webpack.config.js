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
  watchOptions: {
    ignored: ['node_modules/**', 'packages/**/dist/**']
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader'
          }
        ],
      },
    ],
  }
};