import './App.css';
import Home from './Home';
import { Routes, Route, Navigate } from "react-router-dom";
import  Countrydetails  from './Countrydetails';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/Countrydetails" element = {<Countrydetails/>}></Route>
    </Routes>
    
  );
}

export default App;
