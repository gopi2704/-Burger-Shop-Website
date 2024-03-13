import React from "react";
import { Col, Card } from "react-bootstrap";


function Gopz({image, title, price,}){
    return(
        <Col sm={6} lg={4} xl={3} className="mb4">
            <Card className="overflow-hidden">
      <div className="overflow-hidden">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        
       

        <Card.Title>{title}</Card.Title>
        
        <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
                <h5 className="mb-0">${price}</h5>
            </div>
           
        </div>
      </Card.Body>
    </Card>
        </Col>
    )
}

export default Gopz;