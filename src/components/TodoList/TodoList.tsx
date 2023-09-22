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
                    <span className={style["total-count"]}>0 out of 1</span>
                </div>
            </div>
            <div className={style["list-container"]}>
                <div className={style["empty-container"]}>

                </div>
                <div className={style["tasks-container"]}>

                </div>
            </div>
        </div>
    )
}

export default TodoList