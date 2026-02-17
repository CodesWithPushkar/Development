import { useState } from 'react'



function App() {
  const[todos,setTodos] = useState([{
    title: "Enter title",
    description: "Enter description",
    completed: false,
  }]);
  function addTodos(){
    let newTodos = [...todos];
    newTodos.push({
      title:"Eat food",
      description:"Eat chapati",
      completed: false,
    });
    setTodos(newTodos);
  }
  return (
    <div>
      <button onClick={addTodos}>Add todos</button>
    {JSON.stringify(todos)}
    </div>
  );
}

export default App
