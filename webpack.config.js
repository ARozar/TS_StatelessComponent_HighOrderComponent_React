var webpack = require('webpack');


module.exports = {  
  context: __dirname + "/app",
  entry: './main.tsx',
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx' , '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader:'awesome-typescript-loader'}
    ]
  },
  plugins: [
   ]
}