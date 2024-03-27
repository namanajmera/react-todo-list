import { Clipboard } from "../../assets/images";
import style from "./TodoList.module.less";
import { ITodoList } from "../../Model/modal";
import TodoListItems from "../TodoListItems/TodoListItems";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { setTodoList } from "../../store/slice/todoSlice";
import { useEffect } from "react";
import axios from "axios";

type Props = {};

const TodoList = (props: Props) => {
  useEffect(() => {
    fetchTodos();
  });

  const fetchTodos = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL as string);
    console.log("response.data.data ==> ", response.data.data);
    dispatch(setTodoList(response.data.data));
  };

  const { todoList } = useSelector((state: RootState) => {
    return state.todos;
  });
  const dispatch = useDispatch();

  const checkIsCompleted = () => {
    const checkCompleted =
      todoList &&
      todoList.filter((todo: ITodoList, index) => {
        return todo?.isCompleted === true;
      });
    return checkCompleted?.length;
  };

  const handleSelect = (id: number) => {
    const updatedTodo = todoList?.map((todo: ITodoList) =>
      id === todo?.id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo }
    );
    dispatch(setTodoList(updatedTodo));
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodo =
      todoList && todoList.filter((todo: ITodoList) => todo.id !== id);
    dispatch(setTodoList(updatedTodo));
  };

  return (
    <div className={style["todo-list-container"]}>
      <div className={style["info"]}>
        <div className={style["task-created"]}>
          <span className={style["title"]}>Task Created</span>
          <span className={style["count"]}>{todoList?.length}</span>
        </div>
        <div className={style["completed"]}>
          <span className={style["title"]}>Completed</span>
          {todoList.length !== 0 ? (
            <span className={style["total-count"]}>
              {checkIsCompleted()} out of {todoList?.length}
            </span>
          ) : (
            <span className={style["total-count"]}>{todoList?.length}</span>
          )}
        </div>
      </div>
      <div className={style["list-container"]}>
        {todoList.length === 0 && (
          <div className={style["empty-container"]}>
            <img className={style["clipboard-icon"]} src={Clipboard} alt="" />
            <span className={style["empty-text-1"]}>
              You don't have tasks registered yet
            </span>
            <span className={style["empty-text-2"]}>
              Create tasks and organize your to-do items
            </span>
          </div>
        )}
        {todoList && (
          <div className={style["tasks-container"]}>
            {todoList &&
              todoList.map((todo: ITodoList) => (
                <TodoListItems
                  key={todo.id}
                  name={todo.task}
                  isCompleted={todo.isCompleted}
                  id={todo.id}
                  changeValue={handleSelect}
                  handleDeleteTodo={handleDeleteTodo}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
