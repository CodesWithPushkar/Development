import { useState, createContext, useContext } from "react"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import {counterAtom} from '../store/atom/counter'


const Parent = () => {
  

  return <>
    <Display />
    <Increase />    
    <Decrease />
  </>
  
}
const Display = () => {
  const count = useRecoilValue(counterAtom);
  return <p>{count}</p>
}
 
const Increase = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount(value => value+1)}>Increment</button>
  
}

const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount(value => value-1)}>Decrement</button>
}





function App() {
  return <>
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
    
  </>
}

export default App
