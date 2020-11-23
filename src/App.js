import React from 'react'
import './App.css';
//import movies from './data/movies'
import Movie from './components/Movie' 
import Search from './components/Search'
import {Link} from 'react-router-dom'
import { getMovies } from './actions/movies';

class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          movies: []
        }
  }
  
   sendRequest = (title) => {
    getMovies(title,(error, movies)=>{
      if (!error) {
        if (movies && movies.length === 0) {
          alert('No Movie Found!!')
        }
        this.setState(()=>{
          return {
              movies
          }
      })
      }

    })
 

    
   }
  
  
  
   render() {
     return (
       <div className="App backpic">
         <header className="App-header">
        
         {/* <h1>Welcome to AMDB</h1> */}
            <div className="page-header__actions">
            <Link className="button" to="/create">Add Movie</Link>
          </div>
             <Search handleSendRequest={this.sendRequest}/>
             {

                    this.state.movies.map((movie) => {
                      return <Movie key={movie.id} {...movie}/>
                    })
             }
         </header>
       </div>
     );
   }
  }
  export default App;
