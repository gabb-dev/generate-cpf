const path = require("path");

module.exports = {
  mode: "devlopment",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
