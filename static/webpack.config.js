const path = require("path")

const config = {
    mode:"development",
    entry: [path.resolve(__dirname,'./src/index.js')],
    output:{ 
      publicPath: '/',
      path:path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    module: {
        rules: [
          { 
            test: /\.js|jsx$/, 
            exclude: /node_modules/,
            use: 'babel-loader' 
          },
          { 
            test: /\.less$/, 
            //exclude: /node_modules/,
            use: [
                {  loader: "style-loader" },
                {  loader: "css-loader"   },
                {  
                    loader: "less-loader",
                    options: { javascriptEnabled: true } 
                }
            ]
          },
        ]
      }
};
  
module.exports = config;