const { execSync } = require('child_process');
const fs = require('fs');

// ビルド前の準備
console.log('🔄 Preparing for build...');

// キャッシュをクリアする（必要に応じて）
try {
  if (fs.existsSync('./.next')) {
    console.log('🗑️ Cleaning .next directory...');
    fs.rmSync('./.next', { recursive: true, force: true });
  }
} catch (error) {
  console.error('❌ Error cleaning .next directory:', error);
}

// Next.jsビルドを実行
console.log('🏗️ Running Next.js build...');
try {
  execSync('next build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
} 