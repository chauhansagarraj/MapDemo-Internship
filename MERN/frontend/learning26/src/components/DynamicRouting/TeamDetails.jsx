import React from 'react'
import { useParams } from 'react-router-dom'
import teams from "./teamData.js"
const TeamDetails = () => {
    const { name } = useParams();
      const team = teams.find((t) => t.name.toLowerCase() === name.toLowerCase()
  );

    if (!team) {
    return <h2 style={{ textAlign: "center" }}>Team not found</h2>;
  }
  return (
    <>
    <div style={{textAlign:"center", padding:"20px"}}>
        <h2>Team Details</h2>
        <div>Team Name: {team.name}</div>
        <div>Captain: {team.details}</div>
    </div>
    </>
  )
}

export default TeamDetails