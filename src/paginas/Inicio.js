import React from 'react'
import { useState,useEffect } from 'react'
import TablaCliente from '../componets/TablaCliente'
import axios from 'axios'

const Inicio = () => {

  const [clientes, setClientes]=useState([]);
  
  useEffect(() =>{

    const obtenerClientes = async ()=>{
      try {
        const {data}= await axios.get('http://localhost:3005/persona/')
        // console.log(data.respuesta)
     
        setClientes(data.respuesta);
        console.log(clientes)
      
       
        
      } catch (error) {
        console.log(error)
      }
    }
     
    obtenerClientes()
  },[])
  
  
  return (
    <>
        <h1 className='font-black text-3xl text-blue-900'>LISTADO DE CLIENTE</h1>
  
       <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
            <tr>
            <th className='p-2'>ID</th>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Apellido</th>
              <th className='p-2'>Alias</th>
              <th className='p-2'>Email</th>
              <th className='p-2'>Gestionar</th>
            </tr>
        </thead>
        <tbody>
           {clientes.map( (cliente) => (
            <TablaCliente
                key={cliente.id}
                cliente={cliente}
            />

           ))}
          
        </tbody>
           

       </table>
    </>
  )
}

export default Inicio

