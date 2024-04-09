import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from   "react-router-dom";


import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from "./components/NavBar";

function App() {
  return(
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element></Route>
      </Routes>
      <ItemListContainer/>
      </BrowserRouter>
    </> 
  )
    
}

export default App;
