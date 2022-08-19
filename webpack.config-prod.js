const{ CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
      new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
      }),
  ],
mode: 'production',
  devtool: 'source-map'
});