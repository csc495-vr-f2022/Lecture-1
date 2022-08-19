const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
        compress: true,
        hot: true,
        open: true,
        // host: '0.0.0.0', // enable to access from other devices on the network
        // https: true // enable when HTTPS is needed (like in WebXR)

    }    
});

