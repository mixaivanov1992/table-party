const webpack = require('webpack');
const path = require('path');
const uuidv4 = require('uuid');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// function makeHash(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;

//     for (let i = 0; i < length; i += 1) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './public/index.html'),
            minify: {
                collapseWhitespace: true,
            },
        }),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('prod'),
        }),
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: `bundle.${uuidv4()}.js`,
        // filename: `bundle.${makeHash(40)}.js`,
    },
};
