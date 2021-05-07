import React from 'react';
import { Container, Row, Col }from 'react-bootstrap';
import { FaEnvelopeOpen } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>

                        
                        <a className="footer-link brand" href="mailto:tonipow3ll@gmail.com" rel="noopener noreferrer" ><FaEnvelopeOpen size={28} />  </a>
                        <a className="footer-link brand"  href="https://github.com/tonipow3ll" target="_blank" rel="noopener noreferrer"><FaGithub size={28} />  </a>
                        <a className="footer-link brand" href="https://linkedin.com/in/tonipowell13" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={28} />  </a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} >
                        Made with 🖤
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;