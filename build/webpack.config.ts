import htmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import tsImportPlugin from "ts-import-plugin";
import webpack from "webpack";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const devMode = process.env.NODE_ENV !== "production";

const config: webpack.Configuration = {
  devServer: {
    compress: false,
    contentBase: "./dist",
    host: "localhost",
    port: 9000
  },
  devtool: !devMode ? "source-map" : "inline-source-map",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            module: "es2015"
          },
          getCustomTransformers: () => ({
            before: [
              tsImportPlugin({
                libraryDirectory: "lib",
                libraryName: "antd",
                style: true
              })
            ]
          }),
          transpileOnly: true
        },
        test: /\.tsx?$/
      },
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "less-loader", options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|pdf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },

  plugins: [
    process.env.NODE_ENV === "production"
      ? new BundleAnalyzerPlugin({ generateStatsFile: true })
      : () => {},
    new htmlWebpackPlugin({
      template: "index.html"
    })
  ],
  optimization: {
    splitChunks: {
      maxSize: 288960,
      cacheGroups: {
        vendor: {
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};
export default config;
