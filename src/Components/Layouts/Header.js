import React, {useState} from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../Styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import Logo from "../../Food_Assets/assets/logo/logo.png";
import Logo3 from "../../Food_Assets/assets/logo/Logo3.png";




function Header(){
   const [nav, setNav]= useState(false);
   const changeValueOnScroll =()=>{
      const scrolValue = document?.documentElement?.scrollTop;
      scrolValue > 100 ? setNav(true) : setNav(false);
   };

    window.addEventListener("scroll", changeValueOnScroll);

      return(
        <header>
        <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky":""}`}>
      <Container>
        <Navbar.Brand href="#home">
        <Link to="/" className="logo3">
              <img src={Logo3} alt="Logo3" className="img-fluid" />
            </Link>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
           
            <Nav.Link as={Link} to="/menu">
               Our Menu
            </Nav.Link>
            
            <Nav.Link as={Link} to="/shop">
               Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
               Contact
            </Nav.Link>
            
            <Nav.Link as={Link} to="/">
               <div className="cart">
               <i class="bi bi-bag fs-5"></i>
               <em className="roundpoint">2</em>
               </div>
            </Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
}

export default Header;