const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: ["./src/pages/home/entry.js"],
    about: ["./src/pages/about/entry.js"],
  },
  output: {
    filename: "scripts/[name]-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  mode: "development",
  devServer: {
    static: "./dist",
    port: 9000,
    compress: true,
    open: true,
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/style-[contenthash].css",
      linkType: "text/css",
    }),
    new HtmlWebpackPlugin({
      title: "hi mom",
      filename: "index.html",
      template: "./src/pages/home/template.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      title: "hi dad",
      filename: "about.html",
      template: "./src/pages/about/template.html",
      chunks: ["about"],
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
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          // this will override assetModuleFilename
          filename: "images/[name]-[contenthash][ext]",
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split("/")
          .reduceRight((item) => item);
        const allChunksNames = chunks.map((item) => item.name).join("~");
        return `${cacheGroupKey.toLowerCase()}-${allChunksNames}-${moduleFileName}`;
      },
    },
  },
};
