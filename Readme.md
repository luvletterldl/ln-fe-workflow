## webpack4 + vue2.x + webpack-dev-server 前端工作流基本形态

### 0.install
npm i
### 1.dev
npm run start
### 2.prod
npm run build

### 3.手动配置项
webpack 入口出口文件目录

### PS
第一次打包后将html文件放入模板目录中 并修改其中js,css等资源的引入目录 如需引入Django的模板数据在模板文件中html中引入的js标签前执行, 可在.vue文件中使用
之后只需执行1,2步即可
