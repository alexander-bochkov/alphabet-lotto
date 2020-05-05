const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
                    hmr: true
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
            test: /\.(jpg|ttf)$/,
            exclude: /node_modules/,
            loaders: 'file-loader'
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};
