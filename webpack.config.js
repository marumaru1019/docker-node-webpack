const path = require('path');


module.exports = {
  // modeはproduction/developmentで記述
  // ""で囲むことに注意
  mode: "development",
  // どのファイルを読み込むか　default=> ./src/index.js
  entry: './public/index.js',
  //　entryで読み込んだファイルのコンパイルの吐き出し場所
  output: {
    path: path.resolve(__dirname, 'public'),
    // distにsample.jsというファイル名で吐き出し
    filename: 'sample.js',

  },

  module: {
    rules: [

      // Sassファイルの読み込みとコンパイル
      {
        // 拡張子がsassとscssのファイルを対象とする
        test: /\.s[ac]ss$/i,
        // ローダー名 
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          "css-loader",
          // sass2css
          "sass-loader",
        ],
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        type: "asset/inline",
      },
    ],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};