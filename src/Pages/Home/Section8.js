import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Image1 from "../../Food_Assets/assets/menu/burger-11.jpg";
import Image2 from "../../Food_Assets/assets/menu/burger-12.jpg";
import Image3 from "../../Food_Assets/assets/menu/burger-13.jpg";
import Image4 from "../../Food_Assets/assets/menu/burger-14.jpg";
import Image5 from "../../Food_Assets/assets/menu/burger-15.jpg";
import Image6 from "../../Food_Assets/assets/menu/burger-16.jpg";
import Image7 from "../../Food_Assets/assets/menu/burger-17.jpg";
import Image8 from "../../Food_Assets/assets/menu/burger-18.jpg";
import Image9 from "../../Food_Assets/assets/menu/burger-19.jpg";
import Image10 from "../../Food_Assets/assets/menu/burger-20.jpg";
import Image11 from "../../Food_Assets/assets/menu/burger-21.jpg";
import Image12 from "../../Food_Assets/assets/menu/burger-22.jpg";
import Image13 from "../../Food_Assets/assets/menu/burger-23.jpg";
import Image14 from "../../Food_Assets/assets/menu/shake-1.jpg";
import Image15 from "../../Food_Assets/assets/menu/shake-2.jpg";
import Image16 from "../../Food_Assets/assets/menu/shake-3.jpg";
import Image17 from "../../Food_Assets/assets/menu/shake-4.jpg";
import Image18 from "../../Food_Assets/assets/menu/shake-5.jpg";
import Image19 from "../../Food_Assets/assets/menu/shake-6.jpg";
import Image20 from "../../Food_Assets/assets/menu/shake-7.jpg";
import Image21 from "../../Food_Assets/assets/menu/shake-8.jpg";
import Image22 from "../../Food_Assets/assets/menu/juice-1.jpg";
import Image23 from "../../Food_Assets/assets/menu/juice-2.jpg";
import Image24 from "../../Food_Assets/assets/menu/ice-1.jpg";
import Image25 from "../../Food_Assets/assets/menu/ice-2.jpg";
import Image26 from "../../Food_Assets/assets/menu/ice-3.jpg";
import Image27 from "../../Food_Assets/assets/menu/ice-4.jpg";
import Image28 from "../../Food_Assets/assets/menu/ice-5.jpg";
import Cards from "../../Components/Layouts/Gopz";
import Logo from "../../Food_Assets/assets/logo/logo.png";
import Logo3 from "../../Food_Assets/assets/logo/Logo3.png";
import { Link } from "react-router-dom";
import Section1 from "./Section1";


const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken",
      price: 99.15,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon",
      price: 99.32,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep",
      price: 69.15,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      price: 99.25,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      price: 59.25,
    },
    {
      id: "0006",
      image: Image6,
      title: "Turkey Burger",
      price: 79.18,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      price: 99.19,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Burger",
      price: 89.12,
    },
    {
      id: "0009",
      image: Image9,
      title: "Chicken Burger",
      price: 99.15,
    },
    {
      id: "0010",
      image: Image10,
      title: "Egg Attack Burger",
      price: 99.12,
    },
    {
      id: "0011",
      image: Image11,
      title: "Beaf Attack Burger",
      price: 120.00,
    },
    {
      id: "0012",
      image: Image12,
      title: "Black Bun Burger",
      price: 79.12,
    },
    {
      id: "0013",
      image: Image13,
      title: "Mutton Burger",
      price: 110.25,
    },
    {
      id: "0014",
      image: Image14,
      title: "Strawberry Shake",
      price: 79.18,
    },
    {
      id: "0015",
      image: Image15,
      title: "Mixer Shake",
      price: 80.00,
    },
    {
      id: "0016",
      image: Image16,
      title: "Chocolate Shake",
      price: 59.00,
    },
    {
      id: "0017",
      image: Image17,
      title: "Oreo Shake",
      price: 89.00,
    },
    {
      id: "0018",
      image: Image18,
      title: "Strawberry protein shake",
      price: 79.00,
    },
    {
      id: "0019",
      image: Image19,
      title: "Vennila Shake",
      price: 89.00,
    },
    {
      id: "0020",
      image: Image20,
      title: "Creamy Oreo Shake",
      price: 99.00,
    },
    {
      id: "0021",
      image: Image21,
      title: "Banana Juice",
      price: 60.00,
    },
    {
      id: "0022",
      image: Image22,
      title: "Lime Juice",
      price: 40.00,
    },
    {
      id: "0023",
      image: Image23,
      title: "Mango Juice",
      price: 60.00,
    },
    {
      id: "0024",
      image: Image24,
      title: "Strawberry Ice",
      price: 60.00,
    },
    {
      id: "0025",
      image: Image25,
      title: "Vennila Ice",
      price: 70.00,
    },
    {
      id: "0026",
      image: Image26,
      title: "Water Melon Juice",
      price: 70.00,
    },
    {
      id: "0027",
      image: Image27,
      title: "Cone Ice",
      price: 50.00,
    },
    {
      id: "0028",
      image: Image28,
      title: "Chocolate Ice",
      price: 80.00,
    },
   
];





function Section8(){
    return(
        <section className="menu_section">
            <Container>
                <header>
            <Navbar.Brand href="#home">
                <Link to="/" className="logo3">
                  <img src={Logo3} alt="Logo3" className="img-fluid" />
               </Link>
               <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
               </Link>
            </Navbar.Brand>
            </header>
      
                <Row>
                    <Col lg={{span:8, offset:2}}  className="text-center mb-5">
                        <h2>OUR MENU</h2>
                        <h3 ><marquee>((( Order Now )))</marquee></h3>
                        <p className="para">
                       Burgers are the ultimate expression of culinary happiness.
                       A burger is like a little piece of heaven on a bun.
                       Burgers are proof that sometimes the simplest things are the most extraordinary"
                         </p>
                        </Col>
                        
                </Row>
                <Row>{mockData.map((cardData, index)=>(
                    <Cards 
                    key={index}
                    image={cardData.image}
              
                    title={cardData.title}
                   
                    price={cardData.price}
                  
                    />
                ))}</Row>
                <footer className="">
                <Link as={<Section1/>} to="/">
                  <div className="scroll_top">
                <i class="bi bi-arrow-left"></i>
                </div>
            </Link>
                </footer>
                 </Container>
        </section>
    )
}

export default Section8;