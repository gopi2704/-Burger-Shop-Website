import react from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Section3 from "./Pages/Home/Section3";
import Section8 from "./Pages/Home/Section8";






function App() {
  
  
  return (
    
    <Router>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/shop" element={<Section3/>}/>
       <Route path="/menu" element={<Section8/>}/>
      
      </Routes>
    </Router>
    
 
  );
}

export default App;
