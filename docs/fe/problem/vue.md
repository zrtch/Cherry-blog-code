# Vue 合集

## 初始化页面闪动问题

使用 vue 开发时，在 vue 初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于\{\{ message \}\}的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。

```css
[v-cloak] {
  display: none;
}
/* 如果没有彻底解决问题，则在根元素加上 */
style="display: none";
:style= "{display: 'block'}";
```

## data 内部不支持字段以$和\_开头，会有警告

```js
// 警告信息
[Vue warn]: setup() return property "_list" should not start with "$" or "_" which are reserved prefixes for Vue internals.
```

## 调用摄像头拍照 报错

由于不是 https，使用的时候报错，获取不到摄像头权限。由于受浏览器的限制，navigator.mediaDevices.getUserMedia 在 https 协议下是可以正常使用的，而在 http 协议下只允许 localhost/127.0.0.1 这两个域名访问。

> 上线时则需要确认生产环境是否处于 https 协议下。

```js
// 浏览器地址栏输入：
chrome://flags/#unsafely-treat-insecure-origin-as-secure
// 输入对应项目地址（需要用摄像头项目地址）
```

[调用网络摄像头及常见错误处理](https://www.jb51.net/article/207053.htm)

## 可视化大屏自适应函数

```js
function autoScale() {
  const designWidth = 1920 // 设计稿的宽度
  const designHeight = 1080 // 设计稿的高度
  const designRatio = designWidth / designHeight

  // 根据屏幕的变化适配的比例
  const { clientWidth, clientHeight } = window.document.documentElement
  const clientRatio = clientWidth / clientHeight
  const scale =
    clientRatio < designRatio
      ? clientWidth / designWidth
      : clientHeight / designHeight

  // 缩放比例
  // 因为缩放中心在元素中央，translate(-50%是为了将元素向上向左移动，使效果与transform-origin: top left;效果一致)
  const elem = window.document.querySelector('.screen')
  if (elem && elem.style) {
    elem.style.left = '50%'
    elem.style.transformOrigin = '0 0'
    elem.style.transform = `scale(${scale}) translate(-50%)`
  }
}

export function useAutoAdjust() {
  onMounted(() => {
    // 初始化自适应  ----在刚显示的时候就开始适配一次
    autoScale()
    // 绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = autoScale
  })

  onBeforeUnmount(() => {
    window.onresize = null
  })
}
```

## vue2 与 vue3 中 ref 写法上的区别

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

## el-tree 自定义事件

```js
<el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick">
	<template #default="{ node, data }">
		<span class="custom-tree-node">
			<span class="left-tree">
			<span>{{ node.label }}</span>
		</span>
		<div v-if="itemShow === true" class="right-tree">
			<el-icon @click.stop="() => handleAdd(data)"><CirclePlus /></el-icon>
			<el-icon @click.stop="() => handleEdit(data)"><Edit /></el-icon>
			<el-icon @click.stop="() => handleDeletetree(data)" class="color-[#E34D59]">
			<Delete />
		</el-icon>
		</div>
		</span>
	</template>
</el-tree>
```
