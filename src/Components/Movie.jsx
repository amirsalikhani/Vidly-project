import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import '../App.css';

class Movie extends Component {
    state = {
        movies : getMovies()
    }
    render() {
        const { length: counte } = this.state.movies;

        if (counte === 0) return "there are no movies in the database"
        return (
            <React.Fragment>
                <h2 className="m-2">There are {counte} movies on the database.</h2>
                <table className="table">
                <thead>
                    <tr>
                        <th>Titlr</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </React.Fragment>
        );
    }
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies : movies })
    }
}

export default Movie;