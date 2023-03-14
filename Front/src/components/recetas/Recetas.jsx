import React from 'react'
import { Link } from 'react-router-dom'
import './Recetas.css'

const Recetas = () => {
  return (
    <>
    <div className="row fondo btnGeneral" > 
    <h3 id='spartan'style={{display: 'flex', position: 'relative', margin: 30}}>Recetas</h3>
      <div className="container carta" >
        <img className="card-img-top" src="\assets\pan.png" alt="Card image cap"  style={{borderRadius: 35}}/>
        <div className="card-body">
          <h3 className="card-title">Budín apetitoso ahre</h3>
          <p className="card-text">Alto budín para tomarse unos mateicos</p>
          <Link to='/DescripcionRecetas'className="btn btn-dark btnReceta" style={{borderRadius: 25, marginLeft: 70}}>Ver receta</Link>
        </div>
      </div>
      <div className="container carta" >
        <img className="card-img-top" src="\assets\torta.png" alt="Card image cap" style={{borderRadius: 35}}/>
        <div className="card-body">
          <h3 className="card-title">Tortita pa los pi</h3>
          <p className="card-text">Tortasa para acompañar esos leo</p>
          <Link to='/DescripcionRecetas'className="btn btn-dark btnReceta" style={{borderRadius: 25, marginLeft: 70}}>Ver receta</Link>
        </div>
      </div>
      <div className="container carta" >
        <img className="card-img-top" src="\assets\sopa.png" alt="Card image cap" style={{borderRadius: 35}}/>
        <div className="card-body">
          <h3 className="card-title">Soparda</h3>
          <p className="card-text">Mira la pinta que tiene. Entrale!</p>
          <Link to=''className="btn btn-dark btnReceta" style={{borderRadius: 25, marginLeft: 70}}>Ver receta</Link>
        </div>
      </div>
      <div className="container carta" >
        <img className="card-img-top" src="\assets\tortilla.png" alt="Card image cap" style={{borderRadius: 35}}/>
        <div className="card-body">
          <h3 className="card-title">Tortillaca</h3>
          <p className="card-text">Basicamente verduras en una minipimer</p>
          <Link to=''className="btn btn-dark btnReceta" style={{borderRadius: 25, marginLeft: 70}}>Ver receta</Link>
        </div>
      </div>
      <div className="container carta" >
        <img className="card-img-top" src="\assets\omelette.png" alt="Card image cap" style={{borderRadius: 35}}/>
        <div className="card-body">
        <h3 className="card-title">Omelette</h3>
          <p className="card-text">Huevos, queso y tomatito... </p><br />
          <Link to=''className="btn btn-dark btnReceta" style={{borderRadius: 25, marginLeft: 70}}>Ver receta</Link>
        </div>
      </div>
      </div>     

      
    </>
  )
}

export default Recetas