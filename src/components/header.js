
import * as ReactBootStrap from "react-bootstrap";

function Header() {
  return (
    <div className="Header fixed-top">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home"><b>CV</b></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.navbar-ReactBootStrap.nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.navbar-ReactBootStrap.nav">
    <ReactBootStrap.Nav className="me-auto">
      {/* <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-ReactBootStrap.nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link href="#About"> About</ReactBootStrap.Nav.Link>  
    <ReactBootStrap.Nav.Link href="#Info"> Info</ReactBootStrap.Nav.Link>  
    <ReactBootStrap.Nav.Link href="#Objective"> Objective</ReactBootStrap.Nav.Link>  
    <ReactBootStrap.Nav.Link href="#Education"> Education</ReactBootStrap.Nav.Link>  
    <ReactBootStrap.Nav.Link href="#Experience"> Experience</ReactBootStrap.Nav.Link>  
    <ReactBootStrap.Nav.Link href="#Experties"> Experties</ReactBootStrap.Nav.Link>  
     
     
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
 
    </div>
  );
}

export default Header;