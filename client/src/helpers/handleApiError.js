export const handleApiError = (req) => {
  try {
    console.log(req());
    // const { data } = req();
    // return data;
  } catch (error) {
    console.log(error.response);
  }
};
