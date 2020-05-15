const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = {
    mode: 'development',
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        useLocalIp: true,
        port: 1011,
        host: '192.168.31.38',
        stats: 'errors-only',
    },
    devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
