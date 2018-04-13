
/* 
    功能： 设置axios拦截器，包括request拦截和response拦截
    params @axios Object 
*/
module.exports = {
    requestInterceptor: ( axios )=>{
        axios.interceptors.request.use(
            config => {
              config.headers.common['X-Requested-With'] = 'XMLHttpRequest' ;
              const token = localStorage.getItem('token');
              if (token) {
                // Bearer是JWT的认证头部信息
                config.headers.common['Authorization'] = 'Bearer '+ token;
              }
              return config;
            },
            error => {
              return Promise.reject(error);
            }
        );
      },
    
    responseInterceptor :(axios,errCallback) =>{
        axios.interceptors.response.use(function (response) {
            // Do something with response data
            return response;
          }, function (error) {
            // Do something with response error
            if(errCallback) { errCallback(error)};
            return Promise.reject(error);
          });
    }


}