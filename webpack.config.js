var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './src/index.html'
        })
    ]
}