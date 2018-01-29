/* eslint-env node */

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './resources/assets/index.js',
	output: {
		path: `${__dirname}/public/assets`,
		publicPath: '/assets/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
						},
					},
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: { importLoaders: 1 }
						},
						'postcss-loader'
					]
				})
			},
			{
				test: /\.(woff|woff2)$/,
				use: ['url-loader'],
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('index.css')
	]
};
