const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { index: ["./src/index.js"], about: ["./src/about.js"] },
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    static: "./dist",
    port: 9000,
    compress: true,
    open: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "hi mom",
      filename: "index.html",
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
