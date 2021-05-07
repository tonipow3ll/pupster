import React, { useState, useEffect } from 'react';
// import Hero from '../components/Hero'
import { Row, Col, Container } from 'react-bootstrap'
import GiveLove from '../components/Love'
import API from '../utils/API';

function DiscoverPage(props) {

    const [message, setDoggos] = useState({
        image: "",
    })
    
     const handleBtnClick = event => {
        API.getRandomDog().then(response => {
            const newDoggo = () => {
                return response.data.message
            }
            setDoggos(newDoggo)
        })
    }

    useEffect(() => {
        API.getRandomDog().then(response => {
            // setDoggos(response.data.message)
            // console.log(response.data.message)
            const randomDoggos = () => {
                return response.data.message
            }
            setDoggos(randomDoggos)
        })
    },[])

    return (
        <div>
           
            <Container className="text-center" fluid>
                <Row>
                    <Col>
                        <h1 className="mx-auto my-auto">{props.title}</h1>
                        
                        <img className="img" src={message}></img>
                      
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={handleBtnClick} className='btn btn-info my-3'>More 🐶!</button>
                         <GiveLove shuffleFn={handleBtnClick}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DiscoverPage;