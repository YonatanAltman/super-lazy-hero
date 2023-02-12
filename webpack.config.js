const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "my_lazy_bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: 'src/index.html',
    })]
};
