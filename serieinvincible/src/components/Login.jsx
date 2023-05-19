import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondo2 from '../styles/imgs/fondoLogin2.jpg'
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //esto es pa evitar que refresque la pagina
    if (email==='' || password ===''){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Complete los campos'
      });
    }else if(!emailRegex.test(email)){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un correo valido'
      });
    }else if(false){
      //aqui la verificacion en DB de que exite
    }else{
      navigate('/home');
    }
    
  };
  
  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url(${fondo2})`, backgroundSize: 'cover', height: '100vh', width: '100%' }}>

      <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
        
        <form className="form col-8 p-5 border border-dark rounded-5" onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(242, 242, 242, 0.9)' }}>
        <h1 className="text-center mb-3" style={{fontFamily: "'Bangers', cursive"}}>Invincible Fan Club </h1>
          <div className="form-group">
            <label htmlFor="inputEmail"><h5><strong>Correo / Email</strong> </h5></label>
            <input type="text" className="form-control mb-3" id="inputEmail" placeholder="Ingrese su correo" onChange={e => { setEmail(e.target.value) }}/>
          </div>
          <div className="form-group">
            <label htmlFor="innputPassword"> <h5><strong>Contraseña</strong></h5></label>
            <input type="password" className="form-control mb-3" id="inputPassword" placeholder="Ingrese su contraseña" onChange={e => { setPassword(e.target.value) }} />
          </div>
          <div className='col-12'><NavLink to="/registro" style={{ color: '#0a9bb8' }}>No estas registrado? crea tu usuario aqui</NavLink></div>
          
          <div className="d-flex justify-content-center"> 
          <button type="submit" className="btn btn-info col-8 mt-3"><strong>Iniciar Sesión</strong></button>
          </div>
        </form>
      </div>
    </div>
  );
}