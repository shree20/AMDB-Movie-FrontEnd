
export const getMovies = (title, callback)=>{

  //  const env = process.env.NODE_ENV
    const headers = { 
        // 'Content-Type': 'application/json',
         'Origin': 'http://localhost:3000'
          }
       fetch(`http://127.0.0.1:8000/amdb?movietitle=${title}`,{headers})
       .then(res => res.json())
       .then(
         (resp) => {
            callback(undefined,resp.result)
           
          // console.log(resp)
         }).catch(  (error) => {
           //console.log(error)
           callback(error,undefined)
         })

        


}


export const startAddMovie = (movie) => {
   // console.log(movie)

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    };
    fetch('http://127.0.0.1:8000/amdb/addmovie', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

export const startEditMovie = (id,movie) => {
    //movie['id'] = id
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...movie, id})
    };
    fetch('http://127.0.0.1:8000/amdb/editmovie', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    //console.log(id,movie)
}

export const startRemoveMovie = (id) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id})
    };
    fetch('http://127.0.0.1:8000/amdb/removemovie', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}



