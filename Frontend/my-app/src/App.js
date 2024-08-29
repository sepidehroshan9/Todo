import React from 'react'
import './App.css'
import Todo from './components/Todo'
const App=()=>{
  return(
    <div className='main'>
      <header>
        <h2>Todo App</h2>
      </header>
      <Todo></Todo>
    </div>
  )
}
export default App

