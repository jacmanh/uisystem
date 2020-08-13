const path = require('path');
const globalConfig = require('../../config/webpack.config')

module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist')
  },
  ...globalConfig
}