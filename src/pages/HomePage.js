import React from 'react';
import Hero from '../components/Hero'

function HomePage(props) {
    return (
        <div>
    
        <Hero title={props.title} />

        </div>
    )
}

export default HomePage;