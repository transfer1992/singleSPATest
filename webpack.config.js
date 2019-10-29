const webpack = require("webpack");
const path = require("path");

const config = {
    entry: "./src/single-spa.config.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: {
            index: "index.html"
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: ["awesome-typescript-loader"],
                exclude: /node_modules/
            },
            {
                // This plugin will allow us to use AngularJS HTML templates
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};

module.exports = config;
