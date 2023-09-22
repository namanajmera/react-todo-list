import style from "./AddTodo.module.less";
import { Plus } from "../../assets/images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/slice/todoSlice";
import { ITodoList } from "../../Model/modal";

type Props = {};

const AddTodo = (props: Props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    const newTodo: ITodoList = {
      id: Math.random(),
      name: todo,
      isCompleted: false,
    };
    dispatch(addNewTodo(newTodo));
    setTodo("");
  };
  return (
    <div className={style["add-todo-container"]}>
      <input
        className={style["add-input"]}
        type="text"
        placeholder="Add todo here"
        value={todo}
        onChange={(e: any) => setTodo(e.target.value)}
      />
      <button className={style["add-button"]} onClick={handleAddTodo}>
        <span className={style["button-text"]}>Add</span>
        <img className={style["button-img"]} src={Plus} alt="" />
      </button>
    </div>
  );
};

export default AddTodo;
