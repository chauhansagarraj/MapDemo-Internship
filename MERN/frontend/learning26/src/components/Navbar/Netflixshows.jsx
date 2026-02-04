import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShows</h1>
        <ul>
          <li>
            <Link to="/watch/stranger-things" >Stranger Things</Link>
          </li>
          <li>
            <Link to="/watch/from" >From</Link>
          </li>
          <li>
            <Link to="/watch/alice-in-borderland" >Alice in Borderland</Link>
          </li>
        </ul>
    </div>
  )
}