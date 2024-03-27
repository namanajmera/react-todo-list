import axios from "axios";

const fetchTodos = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL as string);
  return response.data.data;
};

export { fetchTodos };
