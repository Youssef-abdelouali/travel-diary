const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'), // The directory for bundled files
    filename: 'bundle.js', // The filename for the bundled JavaScript
  },
  module: {
    rules: [
      // Babel Loader for JS/JSX files
      {
        test: /\.(js|jsx)$/, // For JavaScript and JSX files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: 'babel-loader',
      },
      // CSS Loader for handling .css files
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader'],
      },
      // SCSS Loader for handling .scss files
      {
        test: /\.scss$/, // For SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'], // Use these loaders for SCSS
      },
      // File Loader for handling image files (.jpg, .png, .gif, .svg)
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/, // Matches image file types
        use: {
          loader: 'file-loader', // Use file-loader to handle images
          options: {
            name: '[path][name].[ext]', // Preserve the original file name and path
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx files
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public'
    },
    port: 3000,
    hot: true, // Enable hot module replacement (HMR)
    open: true, // Open the browser automatically
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for generating the HTML file
    }),
    new Dotenv(), // To manage environment variables

  ],
  mode: 'development', // Change to 'production' for production build
  devtool: 'source-map', // Generate source maps for debugging
};
