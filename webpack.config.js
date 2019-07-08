const path = require('path')

var entry = {
	index: './src/index.js'
}

var output = {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'initial')
}

var optimization = {
	splitChunks: {
		cacheGroups: {
			node_venders: {
				test: /[\\/]node_modules[\\/]/,
				chunks: 'initial', // async, initial, all
				priority: 1
			}
		}
	}
}


module.exports = {
	entry,
	output,
	optimization
}