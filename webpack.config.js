const path = require('path'); // para saber donde vamos a trabajar
const HtmlWebpackPlugin = require('html-webpack-plugin'); // instancio el paquete

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'), // como estandar la llamamos dist a la salida
        filename: 'bundle.js', // como se va a llamar la salida
    },
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx'], // las extensiones que usaremos
    },
    module: { // reglas para lo loaders y plugins
        rules: [
            {
                test: /\.(js|jsx)$/, // para entender js o jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/, // lee los archivos html
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // llamo al plugin de html wp loader y le doy su configuracion
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
}