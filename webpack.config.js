const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/app.html',
        filename: 'app.html',
        hash: true
        }),
        new CopyWebpackPlugin({
            patterns:[
                {from: './src/css', to: 'css'}
            ]
        })
    ]
}