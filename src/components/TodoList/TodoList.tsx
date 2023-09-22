import { Clipboard } from "../../assets/images";
import style from "./TodoList.module.less";

type Props = {}

const TodoList = (props: Props) => {
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
                <div className={style["empty-container"]}>
                    <img className={style["clipboard-icon"]} src={Clipboard} alt="" />
                    <span className={style["empty-text-1"]}>You don't have tasks registered yet</span>
                    <span className={style["empty-text-2"]}>Create tasks and organize your to-do items</span>
                </div>
                <div className={style["tasks-container"]}>

                </div>
            </div>
        </div>
    )
}

export default TodoList