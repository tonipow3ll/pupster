import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Hero from '../components/Hero'

function SearchPage(props) {
    return (
        <div>
            <h1>Search for Pupsters!</h1>
            <input
                placeholder="Enter a breed"
            >
            </input>
            <datalist id="breeds">
                {/* {props.breeds.map(breed => (
                    <option value={breed} key={breed} />
                ))} */}
            </datalist>
            <button className="btn btn-info">heckin' search</button>
            {/* <Hero title={props.title} /> */}
        </div>
    )
}

export default SearchPage;