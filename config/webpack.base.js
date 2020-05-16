const autoprefixer = require('autoprefixer');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const projectRoot = process.cwd();

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(projectRoot, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            // {
            //     //前置(在执行编译之前去执行eslint-loader检查代码规范，有报错就不执行编译)
            //     enforce: 'pre',
            //     test: /.(js|jsx)$/,
            //     loader: 'eslint-loader',
            //     include: /src/,
            //     exclude: [
            //         path.join(projectRoot,'node_modules')
            //     ]
            // },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {compact: false}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUnit: 75,
                    //         remPrecision: 8,
                    //     }
                    // }
                ],
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer({
                                    overrideBrowserslist: ['last 2 version', '>1%', 'ios 7'],
                                }),
                            ],
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]',
                        },
                    },
                ],
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8][ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.css$',
            template: path.join(projectRoot, `./build/index.html`),
            filename: `index.html`,
            chunks: 'index.js',
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            },
        }),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),

    ],
    resolve: {
        alias: {
            '@': path.resolve(projectRoot, "src")
        }
    },
    stats: 'errors-only',
}
;
