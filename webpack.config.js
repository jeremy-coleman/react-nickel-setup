const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const API_PROXY_URL = `http://localhost:6767`

module.exports = {
  watch: true,
  entry: "./src/client/client.jsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            cloneInputAst: false,
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            plugins: ["react-hot-loader/babel"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: API_PROXY_URL
      }
    }
  }
}
