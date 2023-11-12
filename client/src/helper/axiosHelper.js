import axios from "axios";

const apiEP = "http://localhost:8000/api/v1/task";

export const postTask = async (obj) => {
  try {
    const { data } = await axios.post(apiEP, obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
