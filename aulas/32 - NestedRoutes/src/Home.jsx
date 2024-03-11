import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Esse é a home</h1>
      <Link to="produto/celular">Celular</Link>{" "}
      <Link to="produto/tv">TV</Link>
    </div>
  )
}

export default Home
