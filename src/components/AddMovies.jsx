import React from 'react';
import serialize from 'form-serialize';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddMovies extends React.Component {
    addMovie = async (movie) => {
        await axios.post(`http://localhost:5001/movies/`, movie)
        this.setState(state => ({
            movies: state.movies.concat([movie])
        }))
    }
    handleFormSubmit = (e) => {
        const newMovie = serialize(e.target, { hash: true });
        console.log(newMovie);
        this.addMovie(newMovie);
    }
// npx json-server --watch src/api/movies.json --port 5001



    render() {

        return (
            <div className="container">
                       <Link to="/">
                    <input type="submit" className="btn btn-success btn-block" value="Home Page" />
                </Link>
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
                </form>
             
            </div>
        )

    }
}


export default AddMovies;