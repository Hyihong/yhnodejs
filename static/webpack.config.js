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
            test: /\.css$/, 
            use: [
                {  loader: "style-loader" },
                {  loader: "css-loader"   },
            ]
          },
          { 
            test: /\.less$/, 
            use: [
                {  loader: "style-loader" },
                {  loader: "css-loader"   },
                {  
                    loader: "less-loader",
                    options: { javascriptEnabled: true } 
                }
            ]
          },{
            test: /\.(png|jpe?g|gif|bmp)$/,
            use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 2048
                  }
                }
            ]
          },{
            exclude: [/\.html$/,/\.(js|jsx)$/,/\.css$/,/\.json$/,/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/,/\.less$/],
            use: [
                {
                  loader: 'url-loader',
                }
            ]
          }
          
        ]
      }
};
  
module.exports = config;