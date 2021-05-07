import React, { useState, useEffect } from 'react';
import API from '../utils/API';

// import Hero from '../components/Hero'

function SearchPage(props) {

    const [search, setSearch] = useState("")

    const [breeds, setBreeds] = useState({
        breeds: []
    })
    const [results, setResults] = useState([])

    // const onLoad = () => {
    //     API.getBaseBreedsList().then(response => {
    //         setSearch((prevSearch) => {
    //            return {
    //             ...prevSearch,
    //             breeds: response.data.message
    //         }
    //     })
    //     })
    // }
    const handleChange = (event) => {
        let dogSearch = event.target.value;
        setSearch(dogSearch);
        // console.log(search)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        // let dogPhotos = response.data.message
        API.getDogsOfBreed(search).then(response => {
            setResults(response.data.message);
        })
    }

    // const handleFormSubmit = event => {
    //     API.getDogsOfBreed().then(response => {
    //         console.log(response)
    //     })
    // }


    return (
        <div>
            <h1>Search for Pupsters!</h1>
            <input
                placeholder="Enter a breed"
                onChange={handleChange}
                // onLoad={onLoad}
            />
            
            <ul>
                
                <li>
                    {results.map((imgsrc, i) => {
                      return <img alt="dog" key={imgsrc + i} src={imgsrc}/>
                    })}
                    {/* <img alt="dog" src={results}/> */}
                </li>
            </ul>
            <button onClick={handleFormSubmit} className="btn btn-info">heckin' search</button>

        </div>
    )
}

export default SearchPage;