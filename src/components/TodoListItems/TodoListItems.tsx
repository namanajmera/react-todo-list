import React from 'react'
import style from "./TodoListItems.module.less";
import { Trash } from '../../assets/images';

type Props = {}

const TodoListItems = (props: Props) => {
    return (
        <div className={style['task-container']}>
            <input className={style['checked']} type="checkbox" name="" id="" />
            <span className={style['text']}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quasi ipsum tenetur nam exercitationem nesciunt minus.</span>
            <img className={style['trash-icon']} src={Trash} alt="" />
        </div>
    )
}

export default TodoListItems;