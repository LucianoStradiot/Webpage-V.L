import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css';
import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/footer/Footer';
import Profesionales from './components/profesionales/Profesionales';
import Error404 from './components/Error404';
import Talleres from './components/talleres/Talleres';
import Formulario from './components/formulario/Formulario';
import Wsp from './components/wsp/wsp';
import Login from './components/login/Login';
import Recetas from './components/Recetas/Recetas';
import DescripcionRecetas from './components/descripcionRecetas/DescripcionRecetas';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[ <Header />, <Banner />, <Recetas/>, <Talleres />, <Contacto />, <Footer />, <Wsp /> ]} />
          <Route path='/profesionales' element={[ <Header />, <Profesionales />, <Footer />, <Wsp /> ]} />
          <Route path='/talleres' element={[ <Header />, <Talleres />, <Footer />, <Wsp /> ]} />
          <Route path='/contacto' element={[ <Header />, <Contacto />, <Footer />, <Wsp /> ]} />
          <Route path='/formulario' element={[ <Header />, <Formulario />, <Footer />, <Wsp /> ]} />
          <Route path='/DescripcionRecetas' element={<DescripcionRecetas />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
