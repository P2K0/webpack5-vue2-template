const { cpus } = require("os");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = [
  {
    test: /\.vue$/,
    loader: "vue-loader"
  },
  {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: [
      { loader: "thread-loader", options: { works: cpus().length } },
      {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: [
            [
              "@babel/preset-env",
              { targets: ["last 3 version", ">1%"], useBuiltIns: "entry", corejs: { version: 3, proposals: true } }
            ]
          ],
          plugins: [["@babel/plugin-transform-runtime", { corejs: false }]]
        }
      }
    ]
  },
  {
    test: /\.txt$/,
    type: "asset/source"
  },
  {
    test: /\.(png|svg|gif|jpe?g|webp)$/,
    type: "asset",
    parser: { dataUrlCondition: { maxSize: 20 * 1024 } }
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    type: "asset/resource",
    generator: { filename: "fonts/[name]-[contenthash:8][ext]" }
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
