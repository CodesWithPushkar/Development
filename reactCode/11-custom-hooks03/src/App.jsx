import {useEffect, useState} from 'react'
import { usePrev } from '../hooks/usePrev';
import { useDebounce } from '../hooks/useDebounce';
function App() {
  //const [value, setValue] = useState(0);
  const [message, setMessage] = useState("");
  //const prev = usePrev(value);
  const debounceValue = useDebounce(message,200);

  useEffect(() => {
    console.log("expensive req");
  },[debounceValue])

  return <>
    {/* <button onClick={() => setValue(value+1)}>Click me {value}</button>
    <p>Previous value is {prev}</p> */}

    <input type="text" onChange={(e) => setMessage(e.target.value)}/>
  </>
}

export default App
