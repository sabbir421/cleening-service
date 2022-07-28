import { Button } from '@mui/material';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.jpg'
import './Navbar.css'
const Navigation = () => {
    return (
        <div>
          <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img style={{height:"50px",width:"100px"}} src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto item">
            <Nav.Link style={{marginRight:"30px",color:'#FF8A00'}} href="#home">Home</Nav.Link>
            <Nav.Link style={{marginRight:"30px"}} href="#features">About</Nav.Link>
            <Nav.Link style={{marginRight:"30px"}} href="#pricing">Service</Nav.Link>
            <Nav.Link style={{marginRight:"30px"}} href="#pricing">Blog</Nav.Link>
            <Nav.Link style={{marginRight:"30px"}} href="#pricing">Contact</Nav.Link>
            <Button style={{height:"40px",width:"154px", backgroundColor:"#FF8A00",borderRadius: "50px",marginRight:"217px",color:"white"}}>Get a Free Quote</Button>
          </Nav>
        </Container>
      </Navbar>
        </div>
       
    );
};

export default Navigation;