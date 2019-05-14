/**
 * 深度克隆对象
 */
export const deepClone = obj => {
  var newObj = {};
  if (obj instanceof Array) {
    newObj = [];
  }
  for (var key in obj) {
    var val = obj[key];
    newObj[key] = typeof val === 'object' ? deepClone(val) : val;
  }
  return newObj;
};

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};
/**
 * 处理时间工具
 */
export const dealWithTime = data => {
  let formatDateTime;
  let Y = data.getFullYear();
  let M = data.getMonth() + 1;
  let D = data.getDate();
  let H = data.getHours();
  let Min = data.getMinutes();
  let S = data.getSeconds();
  let W = data.getDay();
  H = H < 10 ? '0' + H : H;
  Min = Min < 10 ? '0' + Min : Min;
  S = S < 10 ? '0' + S : S;
  switch (W) {
    case 0:
      W = '天';
      break;
    case 1:
      W = '一';
      break;
    case 2:
      W = '二';
      break;
    case 3:
      W = '三';
      break;
    case 4:
      W = '四';
      break;
    case 5:
      W = '五';
      break;
    case 6:
      W = '六';
      break;
    default:
      break;
  }
  formatDateTime =
    Y + '年' + M + '月' + D + '日 ' + H + ':' + Min + ':' + S + ' 星期' + W;
  return formatDateTime;
};
