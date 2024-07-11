import React from 'react'
import { Route,Routes} from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import Cart from './component/Cart';
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
  <>
  {/* <BrowserRouter> */}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<SingleMovie/>}/>
    <Route path="/cart" element={<Cart/>} />
    <Route path="*" element={<Error/>}/>
  </Routes>
  {/* </BrowserRouter> */}
  </>
  )
}

export default App