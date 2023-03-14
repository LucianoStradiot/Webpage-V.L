import React from 'react'
import { Link } from 'react-router-dom'
import './Contacto.css'

const Contacto = () => {
    
    return (
        <>
            <div className="container-fluid" >
                <div className="row" id="ubicacion">
                    <div className="col-xl-5 col-lg-4 col-md-6 col-sm-9">
                        <img src="\assets\isologo.png" alt="" />
                    </div>
                    <div className="col-xl-2 col-lg-1 col-md-1 col-sm-0" id='redes'>
                       
                            <img src="\assets\whatsapp.png" alt='...' id='iconos' /> 2477-662098<br />
                            <img src="\assets\phone.png" alt='...' id='iconos' /> 2477-664103<br />
                            <Link to='/formulario'><img src="\assets\mail.png" alt='...' id='iconos' /> nutricionista.valen@gmail.com</Link><br />
                            <a href='https://www.instagram.com/nutricionista.valen.lansellota/' target="_blank"><img src="\assets\instagram.png" alt='...' id='iconos' />@nutricionista.valen.lansellota</a>
                        
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3">
                        <iframe id='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.055562947784!2d-60.57625298426239!3d-33.88822282749953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9caa9cffd7a31%3A0x216c7edd338b0131!2sBlvd.%20Alsina%20981%2C%20Pergamino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1678198926894!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Contacto;