# 踩坑合集

## React18 下使用 TS 报错，Property 'children' does not exist on type 'Props'

```tsx
import * as React from 'react';
type Props = {
  children?: React.ReactNode
};
const Component: React.FC<Props> = ({children}) => {...}
```
