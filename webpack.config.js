const path = require('path')


const HTMLplugin = require('html-webpack-plugin')


module.exports = {


    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    }
    ,
    plugins: [
        new HTMLplugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // query: {
                //     presets: [
                //         "@babel/preset-env", "@babel/preset-react"
                //     ],
                // },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],

            },
            {
                test: /.(png|svg|jpg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },

        ]
    }
    ,
    mode: 'development'
}