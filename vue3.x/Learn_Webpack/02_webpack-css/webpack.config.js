const path = require('path');

module.exports = {
  entry:"./src/index.js",
  output:{
    path: path.resolve(__dirname,"./dist"),
    filename: "main.js"
  },
  module: {
    rules:[
      {
        test:/\.css$/,  //正则表达式
        // loader:"css-loader"   //语法糖写法
        use:[
          "style-loader",
          "css-loader",
          // 外部配置插件
          "postcss-loader"

          // 内部直接配置
          // {
          //   loader: "postcss-loader",
          //   options:{
          //     postcssOptions: {
          //       plugins:[
          //         require("postcss-preset-env"),
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}