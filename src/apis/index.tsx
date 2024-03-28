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

const isCompleteTodo = async (id: number) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_URL}todo/${id}` as string
  );
  return response.data;
};

const deleteTodo = async (id: number) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_URL}todo/${id}` as string
  );
  return response.data;
};

export { fetchTodos, addTodo, isCompleteTodo, deleteTodo };
