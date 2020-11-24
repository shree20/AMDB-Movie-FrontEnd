

export const isUser = (user, callback) => {
    // console.log(movie)

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch('http://127.0.0.1:8000/amdb/isuser', requestOptions)
        .then(response => response.json())
        .then(data => callback(undefined, data))
        .catch((error)=> callback(error, undefined))
}

export const isAdmin = (user, callback) => {
    // console.log(movie)

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch('http://127.0.0.1:8000/amdb/isuser', requestOptions)
        .then(response => response.json())
        .then(data => callback(undefined, data['Result']['isAdmin']))
        .catch((error)=> callback(error, undefined))
}