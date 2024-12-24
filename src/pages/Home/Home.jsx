import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <p>
        Bienvenido a la página principal!
        <br />
        Esta es la vista por defecto.
        <br />
        Para ver más vistas, navega a <Link to='/about'>About</Link> o <Link to='/contact'>Contact</Link>.
        <br />
        Hasta la próxima!
      </p>
    </div>
  )
}

export default Home