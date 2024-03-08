// 获取当前日期和时间
function getCurrentDateTime() {
  return new Date();
}

// 格式化日期
function formatDate(date, format) {
  return date.toLocaleString('en-US', { timeZone: 'UTC', ...format });
}

// 获取文件/文件夹信息
function getFileInfo(filePath) {
  return fs.statSync(filePath);
}

// 监视文件/文件夹变化
function watchFileOrFolder(filePath, callback) {
  fs.watch(filePath, callback);
}