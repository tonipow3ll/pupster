import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap'
import API from '../utils/API';


function SearchPage(props) {

    const [search, setSearch] = useState("")
    const [breedsList, setBreeds] = useState([])
    const [results, setResults] = useState([])



    const handleChange = (event) => {
        let dogSearch = event.target.value;
        setSearch(dogSearch);
        // console.log(search)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        // let dogPhotos = response.data.message
        API.getDogsOfBreed(search).then(response => {
            setResults(response.data.message)
        })
    }

    // const getBreeds = event => {
    useEffect(() => {
        // const inputClick = (event) => {
        API.getBaseBreedsList().then(response => {
            const fullList = () => {
                return response.data.message
            }
            setBreeds(fullList)
        })
        // }
        // .catch(err => console.log(err))
    }, [])


    // }

    // const handleFormSubmit = event => {
    //     API.getDogsOfBreed().then(response => {
    //         console.log(response)
    //     })
    // }

    // <datalist id="breeds">
    //       {props.breeds.map(breed => (
    //         <option value={breed} key={breed} />
    //       ))}
    //     </datalist>

    return (
        <div className="text-center">
            <h1 className="text-center">Search for Pupsters!</h1>
            <div className="form-group">
                <label htmlFor="breed">Breed Name:</label>
                {/* <input
                name="breed"
                placeholder="Enter a breed"
                onChange={handleChange}
                list="breedsList"
            /> */}
                <select onChange={handleChange}>
                    {/* {console.log(breedsList)} */}
                    {breedsList.map((breed) => {
                        return <option value={breed} key={breed}>{breed}</option>
                        //   {breed} 
                    })}
                </select>
                <button onClick={handleFormSubmit} className="btn btn-info">heckin' search</button>


                <Alert >
                    <p>
                        {/* <strong>Error [404]</strong> */}
                        {/* {': '} */}
                        {!search ? "API error, please try a different breed" : ""}
                    </p>
                </Alert>
                {/* <div>
                    <datalist>
                        <option>Something here</option>
                    </datalist>
                </div> */}
            </div>
            <ul>
                {results.map((imgsrc) => {
                    return <li className="py-3"><img alt="dog" key={imgsrc} src={imgsrc} /> </li>
                })}
            </ul>

        </div>
    )
}

export default SearchPage;