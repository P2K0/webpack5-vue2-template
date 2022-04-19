const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = [
  {
    test: /\.vue$/,
    loader: "vue-loader"
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          ["@babel/preset-env", { useBuiltIns: "usage", corejs: { version: 3, proposals: false } }],
          ["@vue/babel-preset-jsx"]
        ],
        plugins: [["@babel/plugin-transform-runtime", { corejs: false }]]
      }
    }
  },
  {
    test: /\.txt$/,
    type: "asset/source"
  },
  {
    test: /\.(png|svg|gif|jpe?g|webp)$/,
    type: "asset/resource",
    parser: { dataUrlCondition: { maxSize: 20 * 1024 } }
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    type: "asset/resource",
    generator: { filename: "font/[name]-[contenthash:8][ext]" }
  }
];

const dev = [
  {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"]
  },
  {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"]
  }
];

const prod = [
  {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  },
  {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
  }
];

module.exports = (env) => common.concat(env === "prod" ? prod : dev);
