import { categories } from './routes';
import * as api from './api';

export const getAll = () => {
  return api.get(categories());
};

export const get = (id) => {
  return api.get(categories(id));
};

export const post = (body) => {
  return api.post(categories(), body);
};

export const remove = (id) => {
  return api.remove(categories(id));
};
