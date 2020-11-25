import React from 'react'
import MovieForm from './MovieForm'
import {startAddMovie} from '../actions/movies'
import Header from './Header'


class AddMovie extends React.Component {
    onSubmit = (movie) => {
        startAddMovie(movie)
        this.props.history.push('/dashboard')
    }


    render() {
        return (
            <div>
                <Header />
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">This is AddMoviePage</h1>
                    </div>
                </div>
                <div className="content-container">
                    <MovieForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }

}

export default AddMovie