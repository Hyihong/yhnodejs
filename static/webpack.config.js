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
              //loader:'babel-loader' ,
              loader: path.resolve(__dirname,'./node_modules/babel-loader') ,
              options: {  sourceMap: true } 
            } 
           
          },
          { 
            test: /\.css$/, 
            //exclude: /node_modules/,
            use: [
                {  loader: path.resolve(__dirname,'./node_modules/style-loader') ,options: {  sourceMap: true }  },
                {  loader: path.resolve(__dirname,'./node_modules/css-loader'), options: {  sourceMap: true } },

            ]
          },
          { 
            test: /\.less$/, 
            use: [
                {  loader: path.resolve(__dirname,'./node_modules/style-loader') , options: {  sourceMap: true }},
                {  loader: path.resolve(__dirname,'./node_modules/css-loader') , options: {  sourceMap: true }  },
                {  
                    loader: path.resolve(__dirname,'./node_modules/less-loader'),
                    options: { javascriptEnabled: true, sourceMap: true } 
                }
            ]
          },{
            test: /\.(png|jpe?g|gif|bmp)$/,
            use: [
                {
                  loader: path.resolve(__dirname,'./node_modules/url-loader'),
                  options: {
                    limit: 2048
                  }
                }
            ]
           },
           { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
           { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
          
        ]
      },
      devtool:"source-map",
     
};
  
module.exports = config;