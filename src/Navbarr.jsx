import React, { useContext } from 'react'
import { Badge, Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import './App.css';
import { Link } from 'react-router-dom';
import { samplecontext } from './App';


const Navbarr = () => {
  const sample= useContext(samplecontext)
    const { setkeyword, cartproducts } =sample

    const len= cartproducts.length
 console.log(len);

 
  return (
    <div>
       <Navbar style={{height: "80px", backgroundColor: "#2f3b53e5"
      //  , position: "fixed", width: "100%", zIndex: '1000'
       }} expand="lg" >
      <Container>
        <Navbar.Brand className='text-white' href="#home"><h4>E-commerce Cart</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto">
          <Form.Control
              type="search"
              placeholder="Search"
              className="w-50 ms-auto"
              aria-label="Search"
              onChange={(e) => setkeyword(e.target.value)}
              name='title'
            />
          
         
            <Nav.Link href="#home" className='text-white'>Cart</Nav.Link>
            <Link to={"/cart"}><BsFillCartFill className='mt-2 text-white' style={{fontSize: "20px"}}/><sup> <Badge bg="success">{len}</Badge></sup></Link>
                <span className="visually-hidden">unread messages</span>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navbarr
