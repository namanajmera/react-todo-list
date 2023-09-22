import React from 'react'
import style from "./TodoListItems.module.less";
import { Trash } from '../../assets/images';

type Props = {
    id: number
    name: String,
    isCompleted: boolean
    changeValue: any
}

const TodoListItems = ({ name, isCompleted, changeValue, id }: Props) => {
    return (
        <div className={style['task-container']}>
            <input className={style['checked']} type="checkbox" name="" id="" checked={isCompleted}
                onChange={() => changeValue(id)} />
            <span className={`${isCompleted && style['done-task']} ${style['text']}`}>{name}</span>
            <img className={style['trash-icon']} src={Trash} alt="" />
        </div>
    )
}

export default TodoListItems;