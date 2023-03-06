import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {

  handleFormSubmit=(e)=>{
    e.preventDefault();
  }
  render() {
    return (
      <div className='searchBar m-5' >
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row mb-5 d-flex">
            <div className="col-10">
              <input onChange={this.props.searchMovieProp} 
              type="text" className='form-control' placeholder='Search a movie'
              value={this.props.searchQuery}
              />
            </div>
            <div className="col-2">
                        <Link
                                to="/add"
                                type="button" 
                                className="btn btn-md btn-danger"
                                style={{float:'right'}}>Add Movie
                        </Link>
                    </div>
          </div>
        </form>
      </div>
    )
  }
}
