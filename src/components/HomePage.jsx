import React, { Component } from 'react'
import MoviesList from './MoviesList'
import SearchBar from './SearchBar'
import axios from 'axios'



export default class HomePage extends Component {
    state = {
        movies: [],
        searchQuery: ""
    }
    async componentDidMount() {
        const moviesURl = await axios.get("http://localhost:5001/movies");
        this.setState({ movies: moviesURl.data })
    }
    searchMovie = (e) => {
        this.setState({ searchQuery: e.target.value })
    }
    deleteMovie = async (movies) => {
        axios.delete(`http://localhost:5001/movies/${movies.id}`)
        const newMoviesList = this.state.movies.filter(
            m => m.id !== movies.id
        );
        this.setState({
            movies: newMoviesList
        })
    }
    // addMovie=async(movie)=>{
    //     await axios.post(`http://localhost:5001/movies/`,movie)
    //     this.setState(state=>({
    //         movies:state.movies.concat([movie])
    //     }))
    // }

    render() {
        let filteredMovies = this.state.movies.filter(
            movie => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }).sort((a,b)=>{
               return a.id<b.id ? 1 : a.id>b.id ? -1 : 0
            })
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <SearchBar searchMovieProp={this.searchMovie} />
                        </div>
                        <MoviesList movies={filteredMovies} deleteMovie={this.deleteMovie} />
                    </div>
                </div>
            </div>
        )
    }
}
