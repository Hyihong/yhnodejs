# 这是我的个人小站。

### 技术栈选用
## 后端
> nodejs(koa2)
> mysql

## 前端
> react
> antd

###路漫漫其修远兮 ~ 

## 文件夹结构：
> 
    ├─.vscode //vscode设置
    ├─config  //配置项
    ├─db      //数据库底层的操作方法
    ├─server  //服务端 MVC模式
    │  ├─controller  
    │  ├─middleware  //koa2的中间件
    │  ├─models
    │  ├─node_modules
    │  ├─routes   //后端路由控制
    │  ├─scripts  //脚本，用于构建客户端代码
    │  └─views  
    └─static   //客户端 MVVM模式
        ├─dist //经webpack编译过的最终代码
        │  ├─css
        │  └─fonts
        ├─node_modules  //node模块
        └─src  // 前端源码
            ├─assets //资源
            │  ├─images
            │  └─js
            ├─components //组件
            │  ├─admin
            │  └─public
            ├─pages  //页面
            │  ├─admin
            │  └─public
            └─utils //工具

## api设计
> 后端api
  * 后端api分为两种
    
  * 第一种:页面请求路由  
                   |- 以"/admin"开头作为匹配的管理页面，需要授权验证
                   |-以"/home"开头作为匹配的游客页面，公开页面，无需授权验证
  * 第二种：Restful风格的API
                   |-  前后端传递数据的api格式:  /api/xxxxx/
                   |-  无需鉴权的apa格式      :  /api/public/xxxx

## 备注
__关于整体架构网站设计__
> 网站有鉴权机制，暂不支持注册，只提供管理员身份进入后台管理
> 前台后台（这里指的是游客可见页和管理员可见页，后文都用此表示，区分与前端|后端概念的区别）分别采用单页面，
  前台包括登录入口以及网站内容浏览，后台包括内容管理功能。

> 文章列表参考 ： http://demo.cssmoban.com/cssthemes4/egpp_7_documentation/doc-template/docs.html#welcome



