import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from './context';
import Swal from 'sweetalert2';

function ProtectedRoute({element}) {
  const { UsuarioGlobal } = useContext(MyContext);

  console.log(UsuarioGlobal)
  //aqui el llamado al user token

    if (UsuarioGlobal!== null/*  && userToken */){
      return element
    }else{
      Swal.fire({
        icon: 'warning',
        title: 'Inicia sesión',
        text: 'Ingresa tu usuario y contraseña para acceder',
        confirmButtonText: 'OK',
        confirmButtonColor:'#34c374'
      });
      return <Navigate to="/" />;
    }
}

export default ProtectedRoute;