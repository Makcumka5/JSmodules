const path = require("path");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 1
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    plugins: [new HtmlWebpackPlugin()],
};

module.exports = {
    // ...

    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack Boilerplate",
            template: path.resolve(__dirname, "./src/template.html"), // шаблон
            filename: "index.html", // название выходного файла
        }),
    ],
};

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
};

module.exports = {
    entry: "./jsx/App.jsx",
    mode: "development",
    output: {
        path: "/java/helios-backend/src/main/resources/static/js",
        filename: "bundle.js",
    },
    devtool: "#sourcemap",
    stats: {
        colors: true,
        reasons: true,
    },
};

module.exports = {
    // ...

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
};

module.exports = {
    plugins: {
        "postcss-preset-env": {
            browsers: "last 2 versions",
        },
    },
};

module.exports = {
    // ...
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        // ...
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = {
    watch: true,
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
    },
};

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            // 2
            filename: "[name].[contenthash].css", // 3
        }),
    ],
    module: {
        rules: [
            { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            {
                test: /\\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 4
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};

module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }], +"@babel/preset-typescript",
    ],
};

module.exports = {
    // ...

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
};

module.exports = {
    mode: "development",
};