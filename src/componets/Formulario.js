import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios' 

const Formulario = () => {

  const navigate=useNavigate();

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string().min(3,'El nombre es muy corto').required('El nombre campo es obligatorio'),
    apellido: Yup.string().required('El campo apellido es obligatorio'),
    alias: Yup.string().required('El campo alias es obligatorio'),
    email: Yup.string().email().required('El campo email es obligatorio')
    
    })

    const handleSubmit= async(values) =>{
      console.log(values)
      try {
        const response= await axios.post('http://localhost:3005/persona/', values)
       console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik 
          
          initialValues={{
            nombre: '',
            apellido: '',
            alias: '',
            email: ''
            
          }}

          onSubmit={ async (values, {resetForm}) =>{
            await handleSubmit(values)
            
            resetForm()
            navigate('/clientes')
          }}

          validationSchema={nuevoClienteSchema}
          >
        
        {({errors, touched})=> {
       
             return (

        
        <Form className="mt-10">
          <div className=" mb-4">
            <label className="text-gray-800" htmlFor="nombre">
              Nombre:
            </label>
            <Field
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre cliente"
              className="mt-2 block w-full p-3 bg-gray-50 shadow-md"
            />
           {errors.nombre && touched.nombre ? (
            <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
                {errors.nombre}
            </div>) : null }
          </div>
          <div className=" mt-2">
            <label className="text-gray-800" htmlFor="apellido">
              Apellido:
            </label>
            <Field
              id="apellido"
              name="apellido"
              type="text"
              placeholder="Apellido"
              className="mt-2 block w-full p-3 bg-gray-50 shadow-md"
            />
           
          </div>

          <div className=" mt-2">
            <label className="text-gray-800" htmlFor="alias">
              Alias:
            </label>
            <Field
              id="alias"
              name="alias"
              type="text"
              placeholder="Alias"
              className="mt-2 block w-full p-3 bg-gray-50 shadow-md"
            />
           
          </div>

          <div className=" mt-2">
            <label className="text-gray-800" htmlFor="email">
              Email:
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Nombre Email"
              className="mt-2 block w-full p-3 bg-gray-50 shadow-md"
            />
           
          </div>

       

          <input
            className="mt-5 bg-blue-800 p-3 text-white uppercase w-full"
            type="submit"
            
            value="Agregar cliente"
          />
        </Form>
        )}}
      </Formik>
    </div>
  );
};

export default Formulario;
