import axios from "axios";
import { ITodoList } from "../Model/modal";

const fetchTodos = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL as string);
  return response.data.data;
};

const addTodo = async (todo: ITodoList) => {
  const response = await axios.post(
    (process.env.REACT_APP_API_URL + "add-todo") as string,
    todo
  );
  return response.data;
};

export { fetchTodos, addTodo };
