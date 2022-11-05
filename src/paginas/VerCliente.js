import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'



const VerCliente = () => {
  const [clientes, setClientes]=useState([]);

  const {id} =useParams();

  console.log(id)
  
  useEffect(()=>{

    const obtenerClientes = async ()=>{
      try {
        const {data}= await axios.get(`http://localhost:3005/persona/${id}`)
         console.log(data.respuesta)
     
        setClientes(data.respuesta[0]);
        console.log(clientes)
      
       
        
      } catch (error) {
        console.log(error)
      }
    }
     
    obtenerClientes()
  },[])

  return (
    <>
      <p>Cliente: {clientes.apellido}</p>

      <p>Nombre: {clientes.nombre}</p>
      <p>Alias: {clientes.alias}</p>
      <p>Email: {clientes.email}</p>
    </>
  )
}

export default VerCliente
