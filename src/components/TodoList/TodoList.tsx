import { Clipboard } from "../../assets/images";
import style from "./TodoList.module.less";
import { useState } from "react";
import { todoList } from "../../Model/modal";
import TodoListItems from "../TodoListItems/TodoListItems";

type Props = {}

const TodoList = (props: Props) => {
    const [todoList, setTodoList] = useState<todoList[]>([
        {
            id: 1,
            name: "Testing",
            isCompleted: false,
        },
        {
            id: 2,
            name: "Testing",
            isCompleted: false,
        },
        {
            id: 3,
            name: "Testing",
            isCompleted: false,
        },
        {
            id: 4,
            name: "Testing",
            isCompleted: false,
        },
        {
            id: 5,
            name: "Testing",
            isCompleted: false,
        },
    ]);

    return (
        <div className={style["todo-list-container"]}>
            <div className={style["info"]}>
                <div className={style["task-created"]}>
                    <span className={style["title"]}>Task Created</span>
                    <span className={style["count"]}>0</span>
                </div>
                <div className={style["completed"]}>
                    <span className={style["title"]}>Completed</span>
                    <span className={style["total-count"]}>0 out of 0</span>
                </div>
            </div>
            <div className={style["list-container"]}>
                {!todoList ? <div className={style["empty-container"]}>
                    <img className={style["clipboard-icon"]} src={Clipboard} alt="" />
                    <span className={style["empty-text-1"]}>You don't have tasks registered yet</span>
                    <span className={style["empty-text-2"]}>Create tasks and organize your to-do items</span>
                </div> :
                    <div className={style["tasks-container"]}>
                        <TodoListItems />
                        <TodoListItems />
                        <TodoListItems />
                        <TodoListItems />
                        <TodoListItems />
                        <TodoListItems />
                    </div>}
            </div>
        </div>
    )
}

export default TodoList