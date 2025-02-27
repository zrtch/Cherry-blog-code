# 效率篇

## 一键启动多个前端项目的解决方案

在现代前端开发中，我们经常需要同时运行多个相互关联的项目。比如微前端架构中的主应用和子应用，或者前端项目与本地文档站点等。本文将介绍如何实现一键启动多个前端项目的解决方案。

- 提高开发效率，避免手动启动多个项目
- 确保项目启动顺序的正确性
- 统一管理项目的启动状态
- 简化团队协作流程

```bat
@echo off
chcp 65001 >nul
echo 正在查找并启动所有前端项目...

for /d %%i in (*) do (
    if exist "%%i\package.json" (
        echo 🚀 正在启动项目: %%i
        cd %%i && start /b npm run start && cd ..
    )
)

echo ✅ 所有项目已启动
echo 📌 提示：可以使用 taskkill /F /IM "node.exe" 来终止所有进程
pause
```

执行 `start-all.bat` 即可启动所有项目

```
正在查找并启动所有前端项目...
🚀 正在启动项目: one-front
🚀 正在启动项目: two-front
🚀 正在启动项目: three-front
✅ 所有项目已启动
📌 提示：可以使用 taskkill /F /IM "node.exe" 来终止所有进程
Press any key to continue . . .
```
