import React from 'react';
import Hero from '../components/Hero'

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <h1>About Pupster</h1>
            <p>This is a site all about Dogs, Doggos, Puppies, Pupsters! Enjoy!</p>
        </div>
    )
}

export default AboutPage;