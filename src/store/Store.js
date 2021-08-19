import { createSlice,configureStore } from "@reduxjs/toolkit";
import { uuid } from 'uuidv4';



const todoSlice=createSlice({
    name:"todoList",
    initialState:[{
        id:uuid(),
        text:"Study",
        isDone:false
    },{
        id:uuid(),
        text:"Play video games",
        isDone:false
    }],
    reducers:{
        addTodo:(state,action)=>{state.push({
            id:uuid(),
            text:action.payload,
            isDone:false
        })},
        deleteTodo:(state,action)=>{return state.filter((el)=>el.id!==action.payload)},
        toggleIsDone:(state,action)=>{
            const index=state.findIndex((el)=>el.id===action.payload)
            state[index].isDone=!state[index].isDone;
        },
        sortTodo:(state)=>{
            state.sort((a,b)=>(a.isDone === b.isDone)? 0 : a.isDone? -1 : 1); 
        }
    }
})




const store=configureStore({
    reducer:{todos:todoSlice.reducer }
})
export const todoActions=todoSlice.actions;
export default store