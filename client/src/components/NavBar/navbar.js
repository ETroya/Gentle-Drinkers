import React, {useState} from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import {useAuth} from "../Contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"

const Header = () => {
  const [error, setError] =useState("")
  const {currentUser, logout}= useAuth()
  const history= useHistory()

  async function handleLogout(){
    setError("")

      try{
      await logout()
      history.push("/login")
    } catch{
      setError("Failed to logout")
    }
    }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand id="title" href="#home">Gentle-Drinkers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Beer List</Nav.Link>
            <Nav.Link href="#upload">Upload</Nav.Link>
            <NavDropdown title={currentUser.email} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>history.push("/updateprofile")}>UpdateProfile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                Log Out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
