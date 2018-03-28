const config = {
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