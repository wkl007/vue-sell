>  本项目是基于vue实战项目，vue +vue-router + es6 +webpack 高仿饿了么app,是适合新手进阶的绝佳教程。

### 项目技术架构
***
*  vue-cli
*  vue
*  vue-resource
*  vue-router
*  vue-infinite-scroll
*  stylus
*  webpack

###上图
***
* 加入购物车动画

![11.gif](http://upload-images.jianshu.io/upload_images/4249223-8d462b93150db24e.gif?imageMogr2/auto-orient/strip)

* 弹出购物车 商品详情页

![2222.gif](http://upload-images.jianshu.io/upload_images/4249223-71b66b4249d868bd.gif?imageMogr2/auto-orient/strip)

* 分类切换 图片左右滑动

![3333.gif](http://upload-images.jianshu.io/upload_images/4249223-f0921b44740f6d4f.gif?imageMogr2/auto-orient/strip)


###安装
***
项目地址：（`git clone`）
```shell
git@github.com:wkl007/vue-sell.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务(http://localhost:8080)

```
npm run dev
```

###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   └── main.js        // Webpack 预编译入口
</pre>

###实现的功能
***
* 商品滚动 ，商品滚轮滚动
* 商品联动
* 加入购物车，移除购物车
* 显示评论 评论筛选
* 图片左右滑动
* 商品详情  父子组件的通信
* 等等