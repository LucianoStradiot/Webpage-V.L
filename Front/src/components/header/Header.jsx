import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" ><img src="\assets\logo2.png" className='logo' /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id='navigation' >
            <span><img src="\assets\navBar.gif" id="icononav" /></span>
          </button>
          <div className='container barraNav' >
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to='/' className="nav-link active" id='spartan' aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/profesionales' className="nav-link active" id='spartan'>Profesionales</Link>
                </li>
                <li className="nav-item">
                  <Link to='/talleres' className="nav-link active" id='spartan' >Talleres</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contacto' className="nav-link active" id='spartan' >Contacto</Link>
                </li>
                <Link to='/login' type="button" className="btn btn-dark bg-btn btnLogin">Login</Link>
                <button hidden={true} type="button" className="btn btn-dark bg-btn btnLogin">Cerrar Sesión</button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;