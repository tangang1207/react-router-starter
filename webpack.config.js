/**
 * Created by tangang on 2017/12/28.
 */
var webpack = require('webpack')
module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],

    output: {
        path:"public",
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ] : [],

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}