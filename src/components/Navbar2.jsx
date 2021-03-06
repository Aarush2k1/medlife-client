import React from 'react';
// import myUrl from './url.js';
import logo from '../photos/medlife-logo-2D38B846E5-seeklogo.com.png'
import '../css/NavBar.css';
import {Navbar,Nav,Form,Button} from 'react-bootstrap';
import axios from 'axios';
function NavBar2(){
  // const backend_link=myUrl();
  async function Logout(){
    // let mobile=9417753210;
    const url='https://medlife-server.herokuapp.com/logout';
    await axios.get(url).then((response)=>{
      alert(response.data);
      window.location.href='/';
    })
    .catch((err)=>{
      console.log(err);
      if(err.name==='Error'){
        window.location.reload();
        window.location.href='/';
    };
    })
    
  }
    return(
        <Navbar id='Navbar' className="NavbarBg" expand="lg">
        <Navbar.Brand>
      <img
        src={logo}
        width="60px"
        height="30px"
        className="d-inline-block align-top"
        alt=""
        style={{borderRadius:'5px'}}
      />
    </Navbar.Brand>
    <Navbar.Brand href="/" style={{color:'green'}}>MedLife</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className='Links_Nav' style={{color:'green'}}>Home</Nav.Link>
      <Nav.Link href="#contact_us" style={{color:'green'}} className='Links_Nav'>Contact Us</Nav.Link>
      {/* <Nav.Link href="#donate_us" style={{color:'green'}} className='Links_Nav'>Donate Us</Nav.Link> */}
    </Nav>
    <Form inline>
      <Button variant="outline-success" style={{borderRadius:'50px'}} onClick={Logout}>L O G O U T</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    );
}
export default NavBar2;