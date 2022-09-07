const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname, "../"),
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    })],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name].[hash].[ext]"
                }
            },
            {
                test: /\.(ttf|woff)/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name].[hash].[ext]"
                }
            }
        ]
    }
}