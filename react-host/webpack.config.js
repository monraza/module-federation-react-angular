const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3003,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactShell",
      filename: "remoteEntry.js",
      remotes: {
        profile_user: `profile_user@http://localhost:3001/remoteEntry.js`,
        angularApp: `angularApp@http://localhost:4201/remoteEntry.js`,
      },
      exposes: {},
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.12",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.12",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.12",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.12",
        },
        "zone.js": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "~0.13.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
