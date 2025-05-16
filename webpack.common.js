const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].mp4",
              outputPath: "videos/",
            },
          },
        ],
      },
      {
        test: /\.(mp3|wav|ogg)$/i, // Match audio file extensions
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]", // Customize output file naming
            outputPath: "assets/audio/", // Output directory for audio files
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Submed",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
