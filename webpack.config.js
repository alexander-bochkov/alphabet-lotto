const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    context: path.join(__dirname, 'src/app'),
    entry: './index.tsx',
    output: {
        filename: './js/script.js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [{
            test: /\.(j|t)sx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: !production
                }
            },
            'css-loader',
            'resolve-url-loader', {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /\.jpg$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './img',
                    publicPath: '../img'
                }
            }]
        }, {
            test: /\.ttf$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './fonts',
                    publicPath: '../fonts'
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            favicon: './favicon.ico',
            template: './index.html',
            title: 'Alphabet Lotto'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ],
    devtool: production ? false : 'source-map',
    mode: production ? 'production' : 'development',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'public')
    }
};
