# Npm

### 发布 npm 包

1. 首先有自己的 npm 账号
2. 在创建 demo 文件夹后 `npm init` 进行初始化操作
3. 一路回车即可，也可以自定义包的内容

```json
{
  "name": "zrt-npm",
  "version": "1.0.1",
  "description": "发布包",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "author": {
    "name": "cherryyy",
    "email": "15970334351@163.com"
  },
  "license": "MIT"
}
```

4. 接着在 demo 文件夹里创建一个 index.js，随便写几行代码

```javascript
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global.moduleName = factory())
})(this, function () {
  var test = {
    sayHi: function () {
      console.log('i am cherry!')
    },
  }

  return test
})
```

5. 填写账号密码

   第一次发布：`npm adduser` 填写 npm 账号，密码，邮箱，验证码 即可
   非第一次发布包：`npm login` 填写 npm 账号，密码和邮箱即可。

6. 然后就可以发布自己创建好的包

   `npm publish`

7. 后续更新已经发布的包，改下版本号再运行 `npm publish`即可
