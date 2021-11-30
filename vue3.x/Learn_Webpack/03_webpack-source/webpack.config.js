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
      },
      {
        test:/\.(jpe?g|png)$/,
        // use: {
        //   // loader: "file-loader",
        //   loader: "url-loader",
        //   options: {
        //     outputPath: "img",
        //     name: "[name]-[hash:6].[ext]",
        //     limit: 100*1024
        //   }
        //  }

        // webpack5新式打包图片方式
        type:"asset",
        parser: {
          dataUrlCondition: {
            maxSize:100 * 1024
          }
        }
        
      }
    ]
  }
}