import style from "./AddTodo.module.less";
import { Plus } from "../../assets/images";

type Props = {};

const AddTodo = (props: Props) => {
    return (
        <div className={style["add-todo-container"]}>
            <input className={style["add-input"]} type="text" placeholder="Add todo here" />
            <button className={style["add-button"]}>
                <span className={style["button-text"]}>Add</span>
                <img className={style["button-img"]} src={Plus} alt="" />
            </button>
        </div>
    );
};

export default AddTodo;
