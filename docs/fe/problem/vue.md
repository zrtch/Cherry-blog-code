# Vue 合集

### 初始化页面闪动问题

使用 vue 开发时，在 vue 初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于\{\{ message \}\}的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。

```css
[v-cloak] {
  display: none;
}
/* 如果没有彻底解决问题，则在根元素加上 */
style="display: none";
:style= "{display: 'block'}";
```

### data 内部不支持字段以$和\_开头，会有警告

```js
// 警告信息
[Vue warn]: setup() return property "_list" should not start with "$" or "_" which are reserved prefixes for Vue internals.
```

### vue2 与 vue3 中 ref 写法上的区别

```vue
<div ref="demoRef"></div>
```

```js
// vue2
this.$refs.demoRef

// vue3
const tableRef = ref(null)
return {
  tableRef,
}
```
