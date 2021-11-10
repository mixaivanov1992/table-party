const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
//const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
            minify: {
                collapseWhitespace: false
            }
        }),
        //new BundleAnalyzerPlugin(),
        //new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('dev'),
        }),
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js',
    },
}