import { projects } from './routes';
import * as api from './api';
// import handleApiError from './handleApiError'

// export const error = () =>{
//   return api.get(projects('error'));
// }

export const getAll = () =>{
  return api.get(projects());
}

export const get = (slug) => {
  return api.get(projects(slug));
};

export const post = (data) => {
  return api.post(projects(), data);
};

export const put = (slug, data) => {
  return api.put(projects(slug), data);
};

export const remove = (slug) => {
  return api.remove(projects(slug));
};