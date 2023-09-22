import React from 'react'
import style from "./TodoListItems.module.less";
import { Trash } from '../../assets/images';

type Props = {
    id: number
    name: String,
    isCompleted: boolean
    changeValue: any
    handleDeleteTodo: any
}

const TodoListItems = ({ name, isCompleted, changeValue, id, handleDeleteTodo }: Props) => {
    return (
        <div className={style['task-container']}>
            <input className={style['checked']} type="checkbox" name="" id="" checked={isCompleted}
                onChange={() => changeValue(id)} />
            <span className={`${isCompleted && style['done-task']} ${style['text']}`}>{name}</span>
            <img className={style['trash-icon']} src={Trash} alt="" onClick={() => handleDeleteTodo(id)} />
        </div>
    )
}

export default TodoListItems;