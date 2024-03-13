import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../Food_Assets/assets/hero/hero-2.png";
import { Link } from "react-router-dom";


function Section1(){
    return(
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className="position-relative">
                            <img src={Burger} className="img-fluid" alt="Hero"/>
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg">$79.00</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1>New Burger</h1>
                            <h2>With Onion</h2>
                            <p className="text-white pt-2 pb-4">
                            "Burgers are the ultimate expression of culinary happiness. 
                              A burger is like a little piece of heaven on a bun.
                     Burgers are proof that sometimes the simplest things are the most extraordinary"
                            </p>
                             <Link to="/" className="btn order_now">
                                Order Now
                            </Link> 
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>
    )
}

export default Section1;