const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlPlugin({ 
        filename: "index.html",
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
          "process.env": {
              "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
          }
      })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },   
    module: {
      rules: [
          {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "babel-loader",
                      options: {
                          presets: ["@babel/preset-env", "@babel/preset-react"]
                      }
                  }
              ]
          },
          {
              test: /\.html$/,
              use: [
                  {
                      loader: "html-loader"
                  }
              ]
          },
          {
            test: /\.mp3$/,
            type: 'asset/inline'
        },
          {
              test: /\.(png|jpe?g|gif)$/i,
              type: 'asset/inline'
          },
          {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          }
      ]
  },
    devServer: {
        historyApiFallback: true,
        port: 9000
    }
};