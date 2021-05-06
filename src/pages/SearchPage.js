import React, { useState, useEffect } from 'react';
import API from '../utils/API';

// import Hero from '../components/Hero'

function SearchPage(props) {

    const [search, setSearch] = useState({
        search: "",
        breeds: [],
        results: [],
        error: ""
    })

    const handleChange = (event) => {
          setSearch({
              search: event.target.value,
             });
         console.log(search)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed().then(response => {
            setSearch({
                search: event.target.value,
                results: response.data.message
            })
            // setSearch({ results: response.data.message })
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
            >
            </input>
            <ul>

           <li>test test</li>
            </ul>
            <button onClick={handleFormSubmit}className="btn btn-info">heckin' search</button>
         
        </div>
    )
}

export default SearchPage;