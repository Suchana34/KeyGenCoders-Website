import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Assets/logo.jpg";
//import Button from "./button";

class NavBar extends React.Component {
  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><img
        alt=""
        src={logo}
        style={{
          height: 60 + "px",
          width: 60 + "px",
          marginRight: 10 + "px"
        }}
        className="d-inline-block align-top"
        />  
        </Navbar.Brand>

        <Navbar.Brand href="/" className = "title">KeyGen Coders</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" activeStyle={{ border: `none` }}
        style={{ border: `none` }} />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav fill activeKey={this.props.location.pathname} className="ml-auto flex-column flex-md-row">

            <Nav.Item>
              <Nav.Link href="/home">HOME</Nav.Link>
            </Nav.Item>
            
            <div style={{
              width: '40px',
              height: '10px'
            }}></div>

            <Nav.Item>
              <Nav.Link href="/events">EVENTS</Nav.Link>
            </Nav.Item>

            <div style={{
              width: '40px',
              height: '10px'
            }}></div>

            <Nav.Item>
              <Nav.Link href="/team">TEAM</Nav.Link>
            </Nav.Item>

            <div style={{
              width: '40px',
              height: '10px'
            }}></div>

            <Nav.Item>
              <Nav.Link href="/about_us">ABOUT US</Nav.Link>
          </Nav.Item>

        </Nav>

      </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}
export default NavBar;
