# UI 组件库

## 表格组件设置了固定高度和滚动后，导致下拉框被截断

```tsx
<Select
  value={data}
  disabled={disabled}
  mode="multiple"
  onChange={(v) => {
    setData(v)
  }}
  popupVisible={visible}
  removeIcon={null}
  options={roles}
  onClick={() => {
    setVisible(true)
  }}
  getPopupContainer={() =>
    document.body || ((triggerNode) => triggerNode.parentNode)
  }
/>
```

这个属性决定了下拉框（popup）渲染的父容器位置：

1. 默认行为：如果不设置 getPopupContainer，下拉框会渲染在触发元素（Select）的父级容器内。在表格场景中，这会导致下拉框被表格的固定高度和 overflow 属性截断。

2. 设置为 body：通过将容器设置为 document.body，下拉框会被渲染到页面的根节点，而不是表格内部。这样做的好处是：

   - 下拉框会脱离表格的布局上下文
   - 不受表格容器的 overflow 属性影响
   - 可以正常显示在表格之上，不会被截断

3. 降级方案：如果因为某些原因无法获取到 document.body，会降级使用触发节点的父节点作为容器（triggerNode.parentNode）
