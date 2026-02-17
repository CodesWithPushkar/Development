import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"

function App() {
  const[postno, setPostno] = useState(1);
  const {post, loading}= useFetch("https://jsonplaceholder.typicode.com/todos/"+postno);
  
  if(loading){
    return <p>Loading......</p>
  }
  
    return <div>
      <button onClick={() => setPostno(1)}>1</button>
      <button onClick={() => setPostno(2)}>2</button>
      <button onClick={() => setPostno(3)}>3</button>
      <p>{JSON.stringify(post)}</p>
    </div>

  
  
}

export default App
