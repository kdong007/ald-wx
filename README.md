# ald-wx
打包阿拉丁sdk成npm包

## 安装
```
npm install ald-wx --save
yarn add ald-wx
```

## 使用

```js
import ald from "ald-wx"

ald({
    app_key: "xxx", 
    getLocation: true,
    plugin: false,
})
```
参数设置同于[官方文档](http://doc.aldwx.com/aldwx/gao-ji-gong-neng/sdkjie-ru-zhi-nan.html)
