import React from 'react'

export default class MovieForm extends React.Component {
   constructor(props){
       super(props)
       this.state = {
        title : props.movie? props.movie.title : '',
        director: props.movie? props.movie.director : '',
        imdb_score: props.movie? props.movie.imdb_score : '',
        popularity: props.movie? props.movie.popularity : '',
        genre: ['Fiction', 'Thriller'],
        error: ''
       }
   }
   
   
   onTitleChange = (e)=>{
        const title = e.target.value
        this.setState(()=>{
            return {
                title
            }
        })
    }

    onDirectorChange = (e)=>{
        const director = e.target.value
        this.setState(()=>{
            return {
                director
            }
        })
    }

    onImdbscoreChange = (e)=>{
        const imdb_score = e.target.value
        this.setState(()=>{
            return {
                imdb_score
            }
        })
    }

    onPopularityChange = (e)=>{
        const popularity = e.target.value
        this.setState(()=>{
            return {
                popularity
            }
        })
    }
   

    onSubmit = (e)=>{
        e.preventDefault()


            this.props.onSubmit({
                name: this.state.title,
                director: this.state.director,
                imdb_score: this.state.imdb_score,
                popularity: this.state.popularity,
                genre: this.state.genre,
            })
        

    }

    render(){
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {/* {this.state.error && <p className="form__error">{this.state.error}</p>} */}
            <input type="text" placeholder="Title" 
            className="text-input"
            autoFocus value = {this.state.title} onChange = {this.onTitleChange} required/>

            <input type="text" placeholder="Director"
            className="text-input"
            value = {this.state.director}
            onChange={this.onDirectorChange} required
            />
            <input type="text" placeholder="IMDB Score"
            className="text-input"
            value = {this.state.imdb_score} required
            onChange={this.onImdbscoreChange}
            />
            
            <input type="text" placeholder="Popularity"
            className="text-input"
            value = {this.state.popularity}
            onChange={this.onPopularityChange} required
            />
            <div>
            <button className="button">Save Movie</button>
            </div>
            </form>
        )
    }

}