import { execSync } from 'child_process';
import { join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// 获取当前文件的目录（现在是根目录）
const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = __dirname; // 不再需要 join(__dirname, '..')，因为当前文件已在根目录
const distDir = join(root, 'docs', '.vitepress', 'dist');

// 确保脚本抛出遇到的错误
process.on('unhandledRejection', err => {
  console.error(err);
  process.exit(1);
});

console.log('开始部署...');

// 生成静态文件
console.log('正在构建...');
try {
  execSync('pnpm run build', { stdio: 'inherit', cwd: root });
} catch (error) {
  console.error(`构建失败: ${error.message}`);
  process.exit(1);
}

// 确保目录存在
if (!fs.existsSync(distDir)) {
  console.error('构建目录不存在，构建可能失败');
  process.exit(1);
}

// 执行部署命令
try {
  // 进入构建目录
  console.log(`进入目录: ${distDir}`);
  process.chdir(distDir);

  // 初始化 git 仓库
  console.log('初始化 Git 仓库...');
  execSync('git init', { stdio: 'inherit' });
  execSync('git add -A', { stdio: 'inherit' });
  execSync('git commit -m "add"', { stdio: 'inherit' });

  // 推送到 GitHub Pages
  console.log('推送到 GitHub...');
  execSync('git push -f git@github.com:zrtch/Cherry-blog.git master:blog', { stdio: 'inherit' });

  console.log('部署成功！');

  // 返回原目录
  process.chdir(root);
} catch (error) {
  console.error(`部署失败: ${error.message}`);
  process.exit(1);
}