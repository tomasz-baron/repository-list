const path = require('path');
const JsDocPlugin = require('jsdoc-webpack-plugin');

module.exports = {
    entry: './js/utils.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
        publicPath: 'dist'
    },
    plugins: [
        new JsDocPlugin({
            conf: './jsdoc.conf'
        })
    ]
}

