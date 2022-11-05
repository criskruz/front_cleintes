import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

const location =useLocation();
const urlActual = location.pathname
console.log(location)

  return (
    <div className="md:flex md:min-h-screen">

      <div className="md:w-1/4 bg-blue-600 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          Librería
        </h2>

        <nav className="mt-10">
          <Link
            className={`${urlActual === '/clientes' ? 'text-blue-300' : 'text-white'} text-white text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes">Clientes</Link>
          <Link
            className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-white text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/nuevo"
          >
            Nuevo Clientes</Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10 bg-blue-50 md:h-screen overflow-scroll">
      <Outlet />
      </div>
      
    </div>
  );
};

export default Layout;
