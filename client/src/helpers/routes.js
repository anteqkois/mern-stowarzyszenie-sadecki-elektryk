const serverURL = '/api/v1';

export const projects = (slug) => {
  return slug ? `${serverURL}/projects/${slug}` : `${serverURL}/projects`;
};

export const categories = (id) => {
  return id ? `${serverURL}/categories/${id}` : `${serverURL}/categories`;
};

export const authorization = () => {
  return `${serverURL}/authorization`;
};
