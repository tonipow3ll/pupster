import React from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero'

function SearchPage(props) {
    return (
        <div>

            <Hero title={props.title} />
        </div>
    )
}

export default SearchPage;