/**
 *
 *验证非空
 */
export const validateUserName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入账号'));
  } else {
    callback();
  }
};
export const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};
