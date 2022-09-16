const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), 
    filename: "bundle.js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", 
    }),
  ],
  devServer: {
    port: 3000, 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: ["style-loader", "css-loader",'postcss-loader', "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g)$/,
        loader: "url-loader",
        options: { 
            limit: false,
            publicPath: 'assets',
        
        },
      },
    ],
  },
};