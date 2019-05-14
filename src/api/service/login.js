import { basePost } from '../base-service/base';

export default {
  //登录
  signin(value) {
    return basePost('/signin/userSignIn.do', value);
  }
};
