import {useNavigate }from 'react-router-dom'


const TablaCliente = ({cliente}) => {
  const navigate=useNavigate()
  const  {id, nombre, apellido, alias, email} =cliente
  
  
  
  return (
    <tr className='border-b-2'>
      <td className='p-2 text-gray-800 align-middle'>{id}</td>
      <td className='p-2 text-gray-800'>{nombre}</td>
      <td className='p-2 text-gray-800'>{apellido}</td>
      <td className='p-2 text-gray-800'>{alias}</td>
      <td className='p-2 text-gray-800'>{email}</td>
      <td>
        <button className='p-1 text-white bg-rose-600 mr-2' onClick={()=>navigate(`/clientes/${id}`)}>Modificar</button>
        <button className='p-1 text-white bg-cyan-800'>Eliminar</button>
      </td>
      

    </tr>
  )
}

export default TablaCliente
