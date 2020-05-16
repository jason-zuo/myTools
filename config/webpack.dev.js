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
        // useLocalIp: true,
        port: 1011,
        inline:true,  //缺少该配置，会出现history路由找不到路径情况
	    historyApiFallback:true,  //缺少该配置，会出现history路由找不到路径情况
        // host: '192.168.199.134',
        stats: 'errors-only',
        proxy: {
          '/api': {
            target: 'http://localhost:1995',
            changeOrigin: true,
            // pathRewrite: {
            //   "^/api": "/"
            // }
          }
        }
    },
    devtool: 'cheap-module-eval-source-map',
};

module.exports = merge(baseConfig, devConfig);
