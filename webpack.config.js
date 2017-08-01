const path = require('path');

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js", 
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				// tell this babel plugin to only apply to js file and nothing else
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}