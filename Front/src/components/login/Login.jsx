import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card text-white cardprincipal" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">login</h2>
                                        <p className="text-50 mb-5">Por favor, ingrese usuario y contraseña.</p>
                                        <div className="form-outline form-white mb-4">
                                            <input type="user" id="nombreUsuario" name="nombreUsuario" className="form-control form-control-lg" required />
                                            <label className="form-label" htmlFor="nombreUsuario">Usuario</label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="password" className="form-control form-control-lg" name="password" required />
                                            <label className="form-label" htmlFor="password">Contraseña</label>
                                        </div>
                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Ingresar</button><br /><br />
                                        <p><Link to='/' className="text-white fw-bold">Regresar a Home</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login