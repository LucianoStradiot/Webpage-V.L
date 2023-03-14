import React from 'react'
import { Link } from 'react-router-dom'
import './DescripcionRecetas.css'

const DescripcionRecetas = () => {


  return (
    <>
      <Link to='details'>
        <div className="container carta" >
        <img className="card-img-top" src="\assets\pan.png" alt="Card image cap" style={{ borderRadius: 35 }} />
        <div className="card-body">
          <h3 className="card-title">Budín apetitoso ahre</h3>
          <p className="card-text">Alto budín para tomarse unos mateicos</p>
        </div>
        </div>
        </Link>
        <Link to='2'>detalle receta 2</Link>
      </>
        )
      }
      
        export default DescripcionRecetas