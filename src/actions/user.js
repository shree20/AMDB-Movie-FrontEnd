import { trackPromise } from 'react-promise-tracker';

export const isUser = (user, callback) => {
    // console.log(movie)

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };



     trackPromise(fetch('https://thawing-wildwood-43683.herokuapp.com/amdb/isuser', requestOptions)
        .then(response => response.json())
        .then(data => callback(undefined, data))
        .catch((error)=> callback(error, undefined)))
}