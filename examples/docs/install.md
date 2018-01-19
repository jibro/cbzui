# 安装

----
## 前期准备
需要先安装[node.js](https://nodejs.org/en/)，因为我们使用了 `nodejs` 的包管理器 `npm` <br>
不了解node.js的同学可以移步:[node.js 教程](http://www.runoob.com/nodejs/nodejs-tutorial.html)
## npm 镜像
因为 `npm` 部署在国外服务器，推荐使用 `cnpm` 淘宝镜像，让您添加依赖包更快些。
```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
## 使用 npm 安装
推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

```bash
npm install chezhibaoui --save
或
cnpm install chezhibaoui --save
```
## import packages
import chezhibaoui from 'chezhibaoui'




