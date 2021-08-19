import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { todoActions } from '../store/Store'
import "../App.css"

export default function Task(props) {
    const todoList=useSelector(state=>state.todos);
    const dispatch=useDispatch();
    const handleDeleteTodo=(id)=>{
        dispatch(todoActions.deleteTodo(id));
    }
    const handleIsDone=(id)=>{
        dispatch(todoActions.toggleIsDone(id))
    }
    let active="not-checked";
    props.isDone?active="checked":active="not-checked"
    return (
        
        <div className="todo-content" id={active}>
            <input type="checkbox" onChange={()=>handleIsDone(props.id)} checked={props.isDone}/>
            <h1 >{props.text}</h1>
            {/* <button >Delete</button> */}
            <i class="fas fa-window-close" onClick={()=>handleDeleteTodo(props.id)} ></i>
            
            
        </div>
    )
}
