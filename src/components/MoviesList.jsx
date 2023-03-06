import React from 'react'
import { Link } from 'react-router-dom'

export default function MoviesList(props) {

  return (
   
    <div>
        <div className="row col-10">
      {
       props.movies.map(movie=>(
           
            <div className="col-lg-4" key={movie.id}>
                <div className="card mb-4 shadow-sm" style={{width:"300px"}}>
                    <img src={movie.imageURL} alt="img" style={{height:"320px"}}/>
                    <div className="card-body">
                        <h5 className='card-title'>{movie.name}</h5>
                        <p className='card-text'>{movie.overview.slice(0,50)}...</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <button type='button' onClick={(e)=>props.deleteMovie(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                       <button type='button'  className='btn btn-md btn-outline-primary'>Etit</button>
                            <h2><span className='btn btn-outline-info'>{movie.rating}</span></h2>
                        </div>
                    </div>
                </div>
            </div>
           
        ))
      }</div>
    </div>
  )
}
