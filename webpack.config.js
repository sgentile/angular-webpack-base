'use strict';

// import Webpack plugins
const CleanPlugin = require('clean-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEV = process.argv[1].indexOf('webpack-dev-server') >= 0;

// define Webpack configuration object to be exported
let config = {
    context: `${__dirname}/app`,
    entry: './app.module.js',
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./app",
        hot:true,
        inline:true,
        progress: true
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
          'npm': `${__dirname}/node_modules`
        }
    },
    module: {
      loaders: [
        {test: /\.less$/,           loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'postcss', 'less?sourceMap&outputStyle=expanded'].join('!'))},
        {test: /\.css$/,            loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'postcss'].join('!'))},
        {test: /\.html$/,           loader: 'raw'},
        {test: /\.(woff|woff2)$/,   loader: 'url?limit=10000&mimetype=application/font-woff'},
        {test: /\.(eot|svg|ttf)$/,  loader: 'file'},
        {test: /\.js?$/,            loader: ['babel?stage=4', 'jshint'].join('!'), exclude: /node_modules/}
      ]
    },
    plugins: [
        // Moves styles to separate css file (instead of inside the js) - build only
        new ExtractTextPlugin('[name].[hash].css', {disable: DEV}),
        new CleanPlugin(['dist']),
        new NgAnnotatePlugin({add: true})
    ]    
};

module.exports = config;