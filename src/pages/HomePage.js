import React from 'react';
import Hero from '../components/Hero'

function HomePage(props) {
    return (
        <div>

            <Hero title={props.title} />
            <h1>About Pupster</h1>
            <p>Feel free to poke around and discover some new pups, or search for specific breeds.</p>
            <p>This site was made purely for fun. If you have any questions feel free to shoot me an email, or linkedIn message.</p>
            <p>Created with React, React-Bootstrap, and the <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">Dog CEO API</a></p>
        </div>
    )
}

export default HomePage;