const path = require('path'); //es de node para ver hacia donde estamos dentro de las carpetas o donde nos estamos moviendo ya sea en desarrollo local o nube
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js', //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
	output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
		path: path.resolve(__dirname, 'dist'), //Creamos el lugar dónde se exportará el proyecto. en la carpeta dist en la direccion donde se encuentra el archivo
		filename: 'main.js' //Este es el nombre del archivo final para producción.
	},
	resolve: {
		extensions: ['.js'], //Extensiones que vamos a utilizar.
	},
	module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
		rules: [ //Reglas
			{ // Estructura de Babel
				test: /\.js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
				exclude: /node_modules/, //Excluimos la carpeta de node modules
				use: {
					loader: 'babel-loader',//Utilizar un loader como configuración establecida.
				}
			}
		]
	},
	plugins: [  //Establecemos los plugins que vamos a utilizar
		new HtmlWebpackPlugin( //Permite trabajar con los archivos HTML
			{
				inject: true,//Cómo vamos a inyectar un valor a un archivo HTML.
				template: './public/index.html', //Dirección donde se encuentra el template principal
				filename: './index.html' //El nombre que tendrá el archivo
			}
		),
		new CopyWebpackPluguin(
			{
      	patterns: [{ from: './src/styles/styles.css', to: '' }],
    	}
		)
	]
}