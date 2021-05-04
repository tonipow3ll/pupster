import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

function Hero (props) {
    console.log(props)
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 bg-img ">
            <Container className="bg-img">
                <Row className="justify-content-center py-5">
                    <Col>
                    {props.title && <h1>{props.title}</h1> }
                    
                    
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;