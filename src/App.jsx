import logo from './logo.svg';
import './App.css';
import Navbarr from './Navbarr';
import axios from 'axios'
import { createContext, useEffect, useState } from 'react';
import Productcards from './Productcards';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewP from './ViewP';


const samplecontext= createContext()
function App() {
  const api= "https://dummyjson.com/products"
    const [products, setproducts] = useState([])
    const [cartproducts, setcartproducts] = useState([])
    const [id, setid] = useState([])
    const [keyword, setkeyword] = useState("")
    const [addtocartbutn, setaddtocartbutn] = useState(true)


    useEffect(() => {
      axios.get(api).then((res)=>setproducts(res.data.products))
    }, [])
    console.log(products);
  return (
    
    
    <div className="App">
      <ToastContainer  autoClose={1000}/>
      <samplecontext.Provider value={{products, setproducts,cartproducts, setcartproducts,id, setid, keyword, setkeyword, addtocartbutn, setaddtocartbutn}}>
      <BrowserRouter>
          <Navbarr />
          <Routes>
            <Route path='/' element={ <Productcards /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/viewp/:id' element={ <ViewP /> } />




          
          </Routes>
          </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
}

export default App;
export {samplecontext}