const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const loader = require('sass-loader');

module.exports = {
  performance: {
    hints: false, 
  },
  entry: './src/js/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader:'html-loader'
        // use: ['html-loader']

      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    devMiddleware: {
      writeToDisk: true
    },
    hot: false,
    liveReload: true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html',
      filename: 'projects.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/project-details.html',
      filename: 'project-details.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/blog-details.html',
      filename: 'blog-details.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/add-blog.html',
      filename: 'add-blog.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
    }),
  ]
};