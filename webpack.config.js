const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = [
    {
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        chunks: ['bundle', 'analytics'],
    },
    {
        template: path.resolve(__dirname, 'src/login/login.html'),
        filename: 'login.html',
        chunks: ['login', 'analytics', 'babel'],
    },
];
const getFileLoader = (regExp) => ({
    test: regExp,
    use: ['file-loader'],
});
const getStyleLoader = (regExp, additionalLoaders) => {
    const rules = {
        test: regExp,
        use: ['style-loader', 'css-loader'],
    };
    if (additionalLoaders && additionalLoaders.length) {
        additionalLoaders.forEach((loader) => rules.use.push(loader));
    }
    return rules;
};
const getPath = (url) => path.resolve(__dirname, `src/${url}`);

module.exports = {
    entry: {
        bundle: getPath('index.js'),
        analytics: getPath('analytics.js'),
        login: getPath('login/login.js'),
        babel: getPath('login/babel.js'),
    },
    module: {
        rules: [
            getStyleLoader(/\.css$/),
            getFileLoader(/\.(ttf|woff|eot)$/),
            getFileLoader(/\.(jpg|jpeg|svg|png)$/),
            getStyleLoader(/\.s[ac]ss$/, ['sass-loader']),
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        ...pages.map((config) => new HTMLWebpackPlugin(config)),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/images'),
                    to: path.resolve(__dirname, 'dist/assets/images'),
                },
            ],
        }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 7777,
    },
};
