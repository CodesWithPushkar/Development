import { useState } from "react";
import Home from "./Pages/home.jsx";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import YoutubeLayout from "./components/YoutubeLayout.jsx";
import ShortsPage from "./Pages/shorts.jsx";
const App = () => {
  return <>
    <BrowserRouter>
      <YoutubeLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shorts" element={<ShortsPage />}/>
        </Routes>
      </YoutubeLayout>
    </BrowserRouter>
  </>
  
}

export default App;