

/**
 * Created by Administrator on 2017/7/17 0017.
 */
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
    entry: {
        main: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: ["style-loader", "css-loader", "postcss-loader"]
        }, {
            test: /\.html$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: ["html-loader"]
        }, {
            test: /\.(png|jpg|svg|gif)$/i,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: {
                loader: "url-loader",
                options: {
                    limit: 50000,
                    name: 'images/[name]-[hash:5].[ext]'
                }
            }
        }, {
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules')
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'indexmin.html',
            inject: 'body',
        })
    ]
}