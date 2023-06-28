const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: `${process.env.PUBLIC_PATH ?? "http://localhost:9001/"}`,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devtool: "source-map",
  devServer: {
    port: 9001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: process.env.NODE_ENV === 'Production' ? '.env.production' : '.env.development'
    }),
    new ModuleFederationPlugin({
      name: "details",
      filename: "remoteEntry.js",
      remotes: {
        shared: `shared@${process.env.SHARED_URL ?? "http://localhost:3000/remoteEntry.js"}`,
      },
      exposes: {
        "./Card": "./src/components/Card.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "styled-components":{
          singleton:true,
          requiredVersion:deps["styled-components"]
        },
        "react-router-dom":{
          singleton:true,
          requiredVersion:deps["react-router-dom"]
        },
        "pako":{
          singleton:true,
          requiredVersion:deps["pako"]
        }
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
