const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app-[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.sass']
  },
  plugins: [
    /**
     * This plugin assigns the module and chunk ids by occurence count. What this
     * means is that frequently used IDs will get lower/shorter IDs - so they become
     * more predictable.
     */
    new webpack.optimize.OccurenceOrderPlugin(),
    /**
     * See description in 'webpack.config.dev' for more info.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    /**
     * Some of you might recognize this! It minimizes all your JS output of chunks.
     * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
     * your production code through this!
     */
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    /**
     * TODO
     */
    new ExtractTextPlugin('app-[hash].css', {allChunks: true}),
    /**
     * TODO common
     */
    new HtmlWebpackPlugin({
      title: 'OpenWebNet',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'dist/favicon.ico')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.sass/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?outputStyle=expanded')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
