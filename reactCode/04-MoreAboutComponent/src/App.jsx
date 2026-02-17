import { useState, useEffect } from "react"
function App() {
  const[active, setActive] = useState(1);
  const[todo, setTodo] = useState({});
  const[loding ,setLoding] = useState(false);
  useEffect(()=>{
    setLoding(false);
    const fetchTodo = async() => {
    const res = await fetch(`https://dummyjson.com/todos/${active}`);
    const reqTodo = await res.json();  
    setTodo(reqTodo);
    setLoding(true);
  }
  fetchTodo();
  },[active])

  return (
    <div>
      <button style={{color: active===1 ? "red": "black"}} onClick={() => setActive(1)}>Todo1</button>
      <button style={{color: active===2 ? "red": "black"}} onClick={() => setActive(2)}>Todo2</button>
      <button style={{color: active===3 ? "red": "black"}} onClick={() => setActive(3)}>Todo3</button>
      <button style={{color: active===4 ? "red": "black"}} onClick={() => setActive(4)}>Todo4</button>
      <br />
      {loding ? todo.todo: "Loding...."}
    </div>
    
  )
  
}

export default App
