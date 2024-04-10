const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            title: 'Odin ToDo',
            template: './src/template.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './*.html',
                    to: 'htmlCopies',
                    context: 'src/otherHTML',
                    globOptions: {
                        ignore: [
                          '**/template.html',
                        ],
                      },
                }
            ],
        }),
    ],
};