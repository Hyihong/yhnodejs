const path = require("path")

const config = {
    mode:"development",
    entry: {
       index: path.resolve(__dirname,'./src/index.js'),
       admin: path.resolve(__dirname,'./src/admin.js')
    },
    output:{ 
      publicPath: '/',
      path:path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    module: {
        rules: [
          { 
            test: /\.js|jsx$/, 
            exclude: /node_modules/,
            use:{
              loader:'babel-loader' ,
              options: {  sourceMap: true } 
            } 
           
          },
          { 
            test: /\.css$/, 
            use: [
                {  loader: "style-loader" ,options: {  sourceMap: true }  },
                {  loader: "css-loader", options: {  sourceMap: true } },

            ]
          },
          { 
            test: /\.less$/, 
            use: [
                {  loader: "style-loader" , options: {  sourceMap: true }},
                {  loader: "css-loader" , options: {  sourceMap: true }  },
                {  
                    loader: "less-loader",
                    options: { javascriptEnabled: true, sourceMap: true } 
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
      },
      devtool:"source-map" ,
     
};
  
module.exports = config;