import { useState } from "react";

function Todo() {
  const [todo,setTodo]=useState('')
  const [todolist,setTodolist]=useState([])
  const onChange = (e) => setTodo(e.target.value)
  console.log(todolist,"todo")
  const onSubmit = (e) => {
    
    e.preventDefault();
    if(todo ==="") return
    setTodo("")
    setTodolist((prev) => [todo, ...prev])
    console.log("submit")
  }
  return (
    <div>
      <h1>할일 목록 : {todolist.length}</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="할말 입력" onChange={onChange} value={todo}></input>
        <button>할일 등록</button>
      </form>
      {todolist.map((todo) =>(
        <li>{todo}</li>
      ))}
      <button>test</button>
    </div>
  );
}

export default Todo;
