import React from 'react'
import style from "./Todo.module.less";
import { Rocket } from '../../assets/images';

type Props = {}

const Todo: React.FC = (props: Props) => {
    return (
        <div className={style["todo-container"]}>
            <div className={style["heading-container"]}>
                <img className={style["icon"]} src={Rocket} alt="" />
                <span className={`${style["todo-text"]} ${style['to']}`}>to</span>
                <span className={`${style["todo-text"]} ${style['do']}`}>do</span>
            </div>
            <div className={style["add-todo"]}></div>
            <div className={style["todo-list"]}></div>
        </div>
    )
}

export default Todo;