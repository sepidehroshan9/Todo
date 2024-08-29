import React, { useState ,useEffect} from "react";
import axios from "axios";
import './Todo.css'
const Todo = (props) => {
    const [todoName, setTodoName] = useState('')
    const [todolist, setTodoList] = useState([])
     useEffect(()=>{axios.get('http://localhost:8000/api/todo')
    .then((result)=> {const todoData=result.data
    const todos=[]
for(const key in todoData){todos.push({id:key,
titele:todoData[key].titele})}
setTodoList(todos)})},[])



    const inputChangeHandler = (event) => {
        setTodoName(event.target.value)
    }
    const todoAddHandler = (event) => {
        event.preventDefult()
        setTodoList(todolist.concat(todoName))

        axios.post('http://localhost:8000/api/todo',{titele:todoName})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console})

        setTodoName('')
    }
    return (
        <div className="todo">
            <form onSubmit={todoAddHandler}>
                <input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName}></input>
                <button className="btn">Add</button>
            </form>
            <ul>{
                todolist.map(todo => {
                return<li key={todo.id}> {todo.titele}</li>})
                 } </ul>
        </div>
    )

}
export default Todo;