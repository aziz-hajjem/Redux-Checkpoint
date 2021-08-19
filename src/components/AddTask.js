import React,{ useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { todoActions } from '../store/Store'
import '../App.css'

export default function AddTask() {
    const todoList=useSelector(state=>state.todos);
    const dispatch=useDispatch();


    const [input,setInput]=useState('');
    const handleState=(e)=>{
      setInput(e);
    }

    const handleAddTodo=()=>{
        input && dispatch(todoActions.addTodo(input))
    }

    const handleSortTodo=()=>{
        dispatch(todoActions.sortTodo())
      }
    return (
        <div className="add-todo">
            <div className="add">
            <input type="text" onChange={(e)=>handleState(e.target.value)} placeholder="add new todo"/>
            <i class="fa fa-plus" onClick={handleAddTodo}></i>
            </div>

            <i class="fas fa-sort-amount-up" onClick={handleSortTodo}></i>
            
        </div>
    )
}
