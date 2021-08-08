import { autherization } from './routes';
import * as api from './api';

export const post = (body) => {
  return api.post(autherization(), body);
};
