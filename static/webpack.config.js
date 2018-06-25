const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode:"development",
    entry: {
       public: path.resolve(__dirname,'./src/index.js'),
       admin: path.resolve(__dirname,'./src/admin.js')
    },
    output:{ 
      publicPath: '/',
      path:path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    module: {
        rules: [
          { 
            test: /\.js|jsx$/, 
            exclude: /node_modules/,
            use:{ loader: path.resolve(__dirname,'./node_modules/babel-loader') ,options: {  sourceMap: true } } 
          },
          { 
            test: /\.css$/, //如果是在modules中引入的CSS，则直接提取
            include: /node_modules/,
            use: [
              MiniCssExtractPlugin.loader,
              path.resolve(__dirname,'./node_modules/css-loader')
            ]
          },
          // { 
          //   test: /\.less$/, 
          //   exclude: /node_modules/,
          //   use: [
          //       {  loader: path.resolve(__dirname,'./node_modules/style-loader') ,options: {  sourceMap: true }  },
          //       {  loader: path.resolve(__dirname,'./node_modules/css-loader'), options: {  sourceMap: true } },  
          //       // {  loader: path.resolve(__dirname,'./node_modules/postcss-loader') },      
          //   ]
          // },
          { 
            test: /\.less$/, 
            use: [
                {  loader: path.resolve(__dirname,'./node_modules/style-loader') , options: {  sourceMap: true }},
                {  loader: path.resolve(__dirname,'./node_modules/css-loader'),options: {  sourceMap: true }  },  
                {  loader: path.resolve(__dirname,'./node_modules/postcss-loader')},
                {  
                    loader: path.resolve(__dirname,'./node_modules/less-loader'),
                    options: { javascriptEnabled: true, sourceMap: false } 
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
      resolve:{
        extensions: ['.js', '.json','.jsx'],
      },
      devtool:"source-map",
     
};
  
module.exports = config;