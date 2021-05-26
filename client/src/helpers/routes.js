const serverURL = '';

export const projects = id => {
  return id ? `${serverURL}/projects/${id}` : `${serverURL}/projects`
};