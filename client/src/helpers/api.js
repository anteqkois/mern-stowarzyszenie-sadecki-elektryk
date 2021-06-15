import axios from 'axios';

export const  get = async url => {
  const { data } = await axios.get(url);
  return data;
}

export const  post = async (url, body) => {
  const { data } = await axios.post(url, body);
  return data;
}