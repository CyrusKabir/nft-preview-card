const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
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
                    filename: "assets/images/[name].[hash].[ext]"
                }
            },
            {
                test: /\.(ttf|woff)/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name].[hash].[ext]"
                }
            }
        ]
    }
}