import React from 'react'
import MovieForm from './MovieForm'
import {startEditMovie, startRemoveMovie} from '../actions/movies'
import Header from './Header'

class EditMovie extends React.Component {
    onSubmit = (movie) => {
        startEditMovie(this.props.location.state.movie.id, movie)
        this.props.history.push('/dashboard')
    }

    onRemove = () => {
        startRemoveMovie(this.props.location.state.movie.id)
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div>
                <Header />
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Movie</h1>
                    </div>
                </div>
                <div className="content-container">
                    <MovieForm
                        movie={this.props.location.state.movie}
                        onSubmit={this.onSubmit}
                    />
                    <button 
                        className="button buttonsecondary"
                        onClick={this.onRemove}
                    >Remove Movie</button>
                </div>
            </div>
        )
    }

}


export default EditMovie