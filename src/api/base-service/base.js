import axios from '../../utils/axios/config';
import { Message } from 'element-ui';

export const basePost = (url, value) => {
  return axios.post(url, value).catch(err => {
    Message.error(err.message);
  });
};
export const baseGet = (url, value) => {
  return axios.get(url, value).catch(err => {
    Message.error(err.message);
  });
};
