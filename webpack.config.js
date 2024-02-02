const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "index.bundle.js",
        clean: true
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".md"],
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            { 
                test: /\.md$/,
                loader: "raw-loader" 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            { 
                test: /\.tsx?$/,
                loader: "babel-loader" 
            },
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                type: "asset/resource",
                generator: {
                    publicPath: "assets/fonts"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "[path][name][ext]"
                }
            },
            { 
                test: /\.json$/, 
                type: 'json' 
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        })
    ],
}