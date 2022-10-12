const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');

module.exports = {
    mode: 'production', //originalmente esta en 'production'
    
    output: {
        clean: true, //borra la carpeta de dist entera y vuelve a crearla
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.html$/, //los test van viendo cada archivo con esta extension que he colocado, para asi exportarla a produccion
                loader: "html-loader",
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/, //el $ es para que tome indiscriminadamente no importa su capitalizacion
                exclude: /styles.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader,'css-loader']

            },
            {
                test: /\.(png|pje?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()

        ]
    },

    plugins: [
        new HtmlWebPack({ //este plugin es lo que crea el html.
            title: 'Mi Webpack App', 
            //filename: 'index.html'
            template: './src/index.html'

        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css', //el mismo nombre .[fullhash]
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to:'assets/'}
            ]
        }),
        
    ]
}