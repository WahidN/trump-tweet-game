const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const Critters = require('critters-webpack-plugin');
const path = require("path");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(baseConfig, {
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['eslint-loader']
          },
          {
            test: /\.scss$/,
            use: [
              {loader: "style-loader" },
              { loader: "css-loader", options: { importLoaders: 1 } },
              {loader: "sass-loader"}
            ]
          }
        ]
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new Critters()

    ]
});


