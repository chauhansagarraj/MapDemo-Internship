import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  var movies = [
    {id:1, name:"Titanic"},
    {id:2, name:"12th fail"},
    {id:3, name:"Vivah"}
  ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        {
          movies.map((movie)=>{
            return <li>
              <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
            </li>
          })
        }
    </div>
  )
}