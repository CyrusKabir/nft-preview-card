const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
      filename: "[name].[contentHash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader", 
            "sass-loader" 
          ]
        }
      ]
    }
  });
  