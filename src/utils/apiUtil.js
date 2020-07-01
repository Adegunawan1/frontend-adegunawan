const axios = require("axios");

const commonAxios = axios.create({
  baseURL: "https://simple-contact-crud.herokuapp.com/",
});

commonAxios.interceptors.response.use(function(response) {
  const { data } = response;
  console.log("data:", data);
  if (response.data.data === null) {
    const error = new Error(response.data.message || "Unknown error");

    throw error;
  }
  return response.data;
});

export { commonAxios };
