import axios from 'axios';

export const  get = async url => {
  const { data } = await axios.get(url);
  return data;
}