import React from 'react'
import { Link } from 'react-router-dom'
import teams from "./teamData.js"
const TeamsComp = () => {

  return (
    <>
    <div style={{textAlign:"center", padding:"20px"}}>Teams</div>
    <ul>
        {
            teams.map((team)=>{
                return <li key={team.id}>
                    <Link to={`/teamDetails/${team.name}`}>{team.name}</Link>
                </li>
            })
        }
    </ul>
     </>
  )
}

export default TeamsComp