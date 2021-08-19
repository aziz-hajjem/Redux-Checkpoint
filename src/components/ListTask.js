import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

export default function ListTask() {
    const todoList=useSelector(state=>state.todos);
    return (
        <div>
            {todoList.map((el)=><Task text={el.text} id={el.id} isDone={el.isDone}></Task> )}
            
        </div>
    )
}
