import React from 'react'
import { Outlet } from 'react-router-dom'
import Formulariologin from '../componets/Formulariologin'


const IniciarSesion = () => {
  return (
    <>
      <h1>Iniciar Sesion</h1>

      {/* <Formulariologin /> */}
      <Outlet />
    </>
  )
}

export default IniciarSesion
