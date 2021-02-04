const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html"
});
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development", //可以设置为development(开发模式)，production(发布模式)
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件路径
    output: {
        path: path.join(__dirname, './dist'), // 输出文件路径
        filename: 'bundle.js' // 输出文件名
    },
    plugins: [
        htmlPlugin, // plugins 数组是 webpack 打包期间会用到的一些插件列表
        new VueLoaderPlugin(), // 请确保引入这个插件！
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2|jpeg$/,
                use: 'url-loader?limit=32021'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}