
import React from 'react'
import store from './store/Store'
import ListTask from './components/ListTask'
import AddTask from './components/AddTask'
import './App.css'
export default function App() {
  return (
    <div className="container">
      <AddTask></AddTask>
      <ListTask></ListTask>
      
    </div>
  )
}

