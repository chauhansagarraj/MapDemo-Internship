import React from 'react'
import { useParams } from 'react-router-dom'

const WatchComp = () => {
    const { name } = useParams();
  return (
    <div style={{textAlign:"center", padding:"20px"}}>Watching ... {name}</div>
  )
}

export default WatchComp