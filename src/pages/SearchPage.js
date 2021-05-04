import React from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero'

function SearchPage(props) {
    return (
        <div>
            <Container>
            <Hero title={props.title} />

            </Container>
        </div>
    )
}

export default SearchPage;