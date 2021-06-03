import { projects } from './routes';
import * as api from './api';

export const getAll = () =>{
  return api.get(projects());
}

export const get = (slug) => {
  return api.get(projects(slug));
};