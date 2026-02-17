
function App() {

  
  const todos = [{
    title: "go to gym",
    completed: false,
  },
  {
    title: "Eat food",
    completed: true,
  },
  {
    title: "Learn react",
    completed: false,
  },
]


const Todo = (props) => {
  return <div>
    <h1>{props.title}</h1>
    <p>{props.completed ? "Yay go for next target": "Do it if you want to grow don't be lazy"}</p>
  </div>
}

const todosComponent = todos.map(todo => <Todo title={todo.title} completed={todo.completed}/>);

return <div>
  {todosComponent}
</div>
}




export default App
