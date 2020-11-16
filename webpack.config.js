const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = (mode = "development") => {
  return mode;
};

const loaderCSS = (
  options = { implementation: require("sass"), sourceMap: true }
) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options,
      },
    ],
  };
};
// Atleast Webpack 5
const loaderAsset = () => {
  return { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" };
};
// Atleast Webpack 5
const loaderFont = () => {
  return { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" };
};
// File loader
const loaderFile = [
  { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url-loader?limit=100000" },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ["@svgr/webpack"] },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff",
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader",
  },
  { test: /\.html$/, loader: "html-loader" },
];

const loaderTS = () => {
  return {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
};
const loaderJS = () => {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };
};

const watchOptions = (
  aggregateTimeout = 500,
  poll = 1000,
  ignored = /node_modules/
) => {
  return {
    aggregateTimeout: aggregateTimeout,
    poll: poll,
    ignored: ignored,
  };
};

const cleanWPPlugin = (option = true) => {
  return new CleanWebpackPlugin({ cleanStaleWebpackAssets: option });
};

module.exports = {
  mode: mode(),
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
  },
  plugins: [
    cleanWPPlugin(), // Clear file after bundle - use with webpack, not webpack-dev-server
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
    }),
  ],
  module: {
    rules: [loaderCSS(), ...loaderFile, loaderTS(), loaderJS()],
  },
  // watch: true,
  // watchOptions: watchOptions(),
};
