const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     mode: "development",
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  devServer:{
        port: 8080,
        open: true,
},
plugins: [
    new HtmlWebpackPlugin({
      template: './src/templet.html',
    }),
  ],
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        test: /\.html$/i,
    loader: "html-loader",
      },
    ],
  },
}
