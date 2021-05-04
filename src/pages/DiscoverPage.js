import React from 'react';
import Hero from '../components/Hero'

function DiscoverPage(props) {
    return (
        <div>
            <Hero title={props.title} />
        </div>
    )
}

export default DiscoverPage;