const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development', //originalmente esta en 'production'
    
    output: {
        clean: true //borra la carpeta de dist entera y vuelve a crearla
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
            }
        ]
    },
    optimization: {},

    plugins: [
        new HtmlWebPack({ //este plugin es lo que crea el html.
            title: 'Mi Webpack App', 
            //filename: 'index.html'
            template: './src/index.html'

        }),
        new MiniCssExtract({
            filename: '[name].css', //el mismo nombre .[fullhash]
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to:'assets/'}
            ]
        })
    ]
}