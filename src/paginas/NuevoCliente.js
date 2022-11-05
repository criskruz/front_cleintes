import React from 'react'
import Formulario from '../componets/Formulario'

const NuevoCliente = () => {
  return (
    <>
      <h1 className='font-black text-3xl text-blue-900'>NUEVO CLIENTE</h1>
      <p className='mt-10'>Llena los campos para registrar un cliente</p>
      <Formulario />
   
    </>
  )
}

export default NuevoCliente
