# multi-label

> 多标签页

## 文件结构

```
|-- build                         // 项目构建(webpack)相关代码
    |-- build.js                  // 
    |-- check-versions.js         // 
    |-- logo.png                  // 
    |-- utils.js                  // 
    |-- vue-loader.conf.js        // 
    |-- webpack.base.conf.jg      // 
    |-- webpack.dev.conf.js       // 
    |-- webpack.prod.conf.js      // 
|-- config                        // 配置目录，包括端口号等
    |-- dev.env.js        
    |-- index.js    
    |-- prod.env.js  
    |-- test.evn.js             
|-- dist                          // 默认情况下最终打包生成的文件目录
|-- node_modules                  // npm 加载的项目依赖模块
|-- src                           // 项目主要文件
    |-- api                       // - api 请求
    |-- assets                    // - 资源文件，如css、image等
    |-- components                // - 独立的公共组件
    |-- module                    // - 项目模块
    |-- pages                     // - 页面级文件
    |-- router                    // - 路由文件
    |-- App.vue                   // - 页面入口文件
    |-- main.js                   // - 程序入口文件
|-- static                        // 静态文件
    |-- .gitkeep
|-- test
    |-- e2e
    |-- unit
|-- .babelrc
|-- .editorconfig
|-- .eslintignore
|-- .gitignore                   // git 仓库忽略文件
|-- .postcssrc.js                // 
|-- index.html                   // 项目入口文件
|-- package.json
|-- README.md                    // 项目说明文件 

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

