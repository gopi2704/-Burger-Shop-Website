import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer(){
    const [isVisible, setIsVisible] = useState(false);
    const scrollTop =()=>{
        window.scrollTo({
           top: 0,
           behavior:"smooth",
        });
    };

    const listenToScroll = ()=>{
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
    })
    return(
        <>
        <footer>
            <Container>
                <Row>
                    <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Location</h5>
                            <p>5/100, TNHB Colony</p>
                            <p>Mela Anuppanadi</p>
                            <p>Madurai-625009</p>
                            <p>TamilNadu</p>
                        </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Working Hours</h5>
                            <p>Mon-Fri: 9:00AM - 10:00PM</p>
                            <p>Saturday: 10:00AM - 8:30PM</p>
                            <p>Sunday: 12:00PM - 5:00PM</p>
                            
                        </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Order Now</h5>
                            <p>24 hrs Working Quick Order Now</p>
                            <p>
                                <Link to="tell:6369286074" className="calling">
                                6369286074
                                </Link>
                            </p>
                            </div>
                        </Col>
                        <Col sm={6} lg={3} className="mb-4 mb-lg-0">
                        <div className="text-center">
                            <h5>Follow Us</h5>
                            <p>On Our Social Networks</p>
                            <ul className="list-unstyled text-center mt-2">
                               <li>
                                <Link to="/">
                                <i class="bi bi-facebook"></i>
                                </Link>
                               </li>
                               <li>
                                <Link to="/">
                                <i class="bi bi-twitter"></i>
                                </Link>
                               </li>
                               <li>
                                <Link to="/">
                                <i class="bi bi-instagram"></i>
                                </Link>
                               </li>
                               <li>
                                <Link to="/">
                                <i class="bi bi-youtube"></i>
                                </Link>
                               </li>
                            </ul>
                            <p>@YOURSOCIALNETWORK</p>
                            </div>
                        </Col>
                </Row>
                <Row className="copy_right">
                    <Col>
                    <div>
                        <ul className="list-unstyled text-center mb-0">
                        <li>
                         <Link to="/">
                             © 2024 <span>CODE4EDUCATION</span>. All Rights Reserved
                         </Link>
                         </li>
                         <li>
                         <Link to="/">About Us</Link>
                         </li>
                         <li>
                         <Link to="/">Terms Of Use</Link>
                         </li>
                         <li>
                         <Link to="/">Privacy Policy</Link>
                         </li>
                         </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        {isVisible && (<div className="scroll_top" onClick={scrollTop}>
            <i class="bi bi-arrow-up"></i>
         </div>)}
         
        </>
    )
}

export default Footer;