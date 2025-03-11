// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // library: {
    //   type: "var", // Change from "module" to "var", "umd", or "commonjs"
    // },
  },
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    watchFiles: ["./src/index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  experiments: {
    outputModule: false, // 👈 Ensures ES Module output
  },
  resolve: {
    alias: {
      browser: "webextension-polyfill", // 👈 Fix for "browser is not defined"
    },
  },
};
