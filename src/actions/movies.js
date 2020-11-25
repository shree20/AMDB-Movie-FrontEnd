import { trackPromise } from 'react-promise-tracker';



export const getMovies = (title, callback) => {

    //const env = process.env.NODE_ENV
    // const headers = { 
    //      'Origin': 'http://localhost:3000'
    //       }


    trackPromise(
        fetch(`https://thawing-wildwood-43683.herokuapp.com/amdb?movietitle=${title}`)
            .then(res => res.json())
            .then(
                (resp) => {
                    callback(undefined, resp.result)

                    // console.log(resp)
                }).catch((error) => {
                    //console.log(error)
                    callback(error, undefined)
                })
    )
            }


    export const startAddMovie = (movie) => {
        // console.log(movie)

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movie)
        };

       
        fetch('https://thawing-wildwood-43683.herokuapp.com/amdb/addmovie', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    export const startEditMovie = (id, movie) => {
        //movie['id'] = id
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...movie, id })
        };
        fetch('https://thawing-wildwood-43683.herokuapp.com/amdb/editmovie', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
        //console.log(id,movie)
    }

    export const startRemoveMovie = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        };
    fetch('https://thawing-wildwood-43683.herokuapp.com/amdb/removemovie', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }



