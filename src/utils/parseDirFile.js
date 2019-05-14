const path = require('path');
const fs = require('fs');

function parseDirFile(dir) {
  this.dir = dir;
  this.filePath = path.join(path.resolve(__dirname, '..'), this.dir);
  this.obj = {};
}
parseDirFile.prototype.fileDisplay = function() {
  //根据文件路径读取文件，返回文件列表
  let files = fs.readdirSync(this.filePath);
  files.forEach(filename => {
    //获取当前文件的绝对路径
    let filedir = path.join(this.filePath, filename);
    const val = require(filedir);
    Object.assign(this.obj, val);
  });
  return this.obj;
};

module.exports = parseDirFile;
