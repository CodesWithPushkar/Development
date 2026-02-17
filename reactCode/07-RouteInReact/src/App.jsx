
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate, Outlet } from "react-router-dom"
function App() {
    return (
      // these routes inside BrowserRouter it appear conditionally but above it or below it appear always
      <div>
        I appear always
      <br /> 
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LandingPage/>}>
          <Route path="/neet-12" element={<Class12NeetProgram/>}/>
          <Route path="/neet-11" element={<Class11NeetProgram/>} />
          <Route path="/" element={<WelcomePage/>} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}



  const Class12NeetProgram = () => {
    const navigate = useNavigate();
    useEffect(()=>{
      setTimeout(()=>{
        navigate("/");  // after 5 ser user go back to Welcome page
      },5000);
    },[]);
    return <div> 
        Neet 12 content 
    </div>
  }

  const LandingPage = () => {
    
    return <div>
      <Link to={"/neet-12"}>NEET 12</Link>
      <Link to={"/neet-11"}>NEET 11</Link>
      <Link to={"/"}>LANDING</Link>
      <Outlet />
    </div>
  }

  const Class11NeetProgram = () => {
    return <div>
        Neet 11 content
    </div>
  }

   const WelcomePage = () => {
  return <div>
    Welcome to our lab
  </div>
  }

  const NotFound = () => {
    return <div>
      Page Not found
    </div>
  }

 

export default App
 
