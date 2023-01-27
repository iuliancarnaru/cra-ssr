const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./server/server.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "server.js",
    publicPath: "",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          emit: false,
        },
      },
      {
        test: /\.svg/,
        type: "asset/resource",
        // generator: {
        //   emit: false,
        // },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
