const path = require("path");
const webpack = require("webpack");
const config = require( path.resolve(__dirname,"../static/webpack.config.js"));

var compiler = webpack(config)

//fed on run and watch function ;
const compilerCallback = function( err,stats ){
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
              console.error("webpack错误信息："+ err.details);
            }
            return;
        }
        
        if (stats.hasErrors()) {
        console.error(stats.toJson().errors);
        return;
        }
        
        if (stats.hasWarnings()) {
        console.warn(info.warnings);
        return;
        }
    
        console.log("编译成功")
}

const watchOptions ={
    aggregateTimeout: 300,
    poll: 1000,
    ignored: path.resolve(__dirname, "../static/node_modules"),
    dev:{ publicPath :"/"}
}


exports.compilerProduct = ()=> compiler.run( compilerCallback ) ;
exports.compilerWatch = ()=> compiler.watch( watchOptions, compilerCallback ) ;
exports.compilerInstance = compiler ;
