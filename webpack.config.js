const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: "Odin ToDo",
            template: "./src/template.html",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './src/*.html',
                    to: path.resolve(__dirname, 'dist'),
                    globOptions: {
                        ignore: [
                          "**/template.html",
                        ],
                      },
                }
            ],
        }),
    ],
};