import { useState, createContext, useContext } from "react";


const BulbContext = createContext();

function BulbProvider({children}){
  const [isBulbOn, setBulbOn] = useState(true);
   return <div>
    <BulbContext.Provider value={{
        isBulbOn: isBulbOn,
        setBulbOn: setBulbOn
      }}>
      {children}
    </BulbContext.Provider>
  </div>
}


function App() {
  
  return <BulbProvider>
    <LightBulb />
  </BulbProvider>
}



function  LightBulb(){
  
  return <div>
    <BulbState/>
    <ToogleBulbState/>
  </div>
}


function BulbState(){
  const {isBulbOn} = useContext(BulbContext);
  return <div>
    {isBulbOn ? "Bulb on" : "Bulb off"}
  </div>
}


function ToogleBulbState(){
  const {isBulbOn, setBulbOn} = useContext(BulbContext);
  function toggle(){
    setBulbOn(isBulbOn => !isBulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle</button>
  </div>
}





export default App
