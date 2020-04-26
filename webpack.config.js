const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
const path = require('path')

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx']

    },
   // context: reactTwit,
    entry: ['./src/index.jsx'],
    output: {
         filename: 'app.js',
         //path: './build',
         path: path.join(__dirname, 'dist'),
         publicPath: '/'
    },
    devServer:{
        port: 4000,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
            , {

                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/assets/index.html'
        }),
        new ExtractTextPlugin(
            'style.css', {allChunks: true}
        )
    ]
}