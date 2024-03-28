import style from "./AddTodo.module.less";
import { Plus } from "../../assets/images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodoList } from "../../store/slice/todoSlice";
import { ITodoList } from "../../Model/modal";
import { addTodo, fetchTodos } from "../../apis";

type Props = {};

const AddTodo = (props: Props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: ITodoList = {
      task: todo,
    };
    const resp = await addTodo(newTodo);
    if (resp) {
      const response = await fetchTodos();
      dispatch(setTodoList(response));
    }
    setTodo("");
  };
  return (
    <form
      className={style["add-todo-container"]}
      onSubmit={(e: React.FormEvent) => handleAddTodo(e)}
    >
      <input
        className={style["add-input"]}
        type="text"
        placeholder="Add todo here"
        value={todo}
        onChange={(e: any) => setTodo(e.target.value)}
      />
      <button className={style["add-button"]} type="submit">
        <span className={style["button-text"]}>Add</span>
        <img className={style["button-img"]} src={Plus} alt="" />
      </button>
    </form>
  );
};

export default AddTodo;
