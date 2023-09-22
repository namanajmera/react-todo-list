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
            name: "TestingTesting Testing Testing Testing TestingTesting Testing   TestingTestingTestingTestingTesting  Testing Testing Testing TestingTesting Testing Testing Testing",
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

    const checkIsCompleted = () => {
        const checkCompleted = todoList && todoList.filter((todo: todoList, index) => {
            return todo?.isCompleted === true;
        })
        return checkCompleted.length;
    }

    const handleSelect = (id: number) => {
        const updatedTodo: todoList[] = todoList.map((todo: todoList) =>
            id === todo?.id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
        );
        setTodoList(updatedTodo);
    }

    return (
        <div className={style["todo-list-container"]}>
            <div className={style["info"]}>
                <div className={style["task-created"]}>
                    <span className={style["title"]}>Task Created</span>
                    <span className={style["count"]}>{todoList.length}</span>
                </div>
                <div className={style["completed"]}>
                    <span className={style["title"]}>Completed</span>
                    <span className={style["total-count"]}>{checkIsCompleted()} out of {todoList.length}</span>
                </div>
            </div>
            <div className={style["list-container"]}>
                {!todoList ? <div className={style["empty-container"]}>
                    <img className={style["clipboard-icon"]} src={Clipboard} alt="" />
                    <span className={style["empty-text-1"]}>You don't have tasks registered yet</span>
                    <span className={style["empty-text-2"]}>Create tasks and organize your to-do items</span>
                </div> :
                    <div className={style["tasks-container"]}>
                        {
                            todoList && todoList.map((todo, index) => (
                                <TodoListItems key={todo.id} name={todo.name} isCompleted={todo.isCompleted} id={todo.id} changeValue={handleSelect} />
                            ))
                        }
                    </div>}
            </div>
        </div>
    )
}

export default TodoList