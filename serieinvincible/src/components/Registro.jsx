import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondo2 from '../styles/imgs/fondoLogin2.jpg'
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Registro() {
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); //esto es pa evitar que refresque la pagina
    if (nombre==='' || email==='' || password ==='' || confpassword===''){
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
    } else if(password !== confpassword){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden'
      });
      setPassword('')
      setConfPassword('')
    
      
    }else{

      const data = {
        password: password,
        name: nombre,
        email: email,
        image: "https://esic.co/wp-content/uploads/2022/08/Isis-Bonet-Cruz.jpg",
        verified: false,
        role: 'nose'
      };
      
      try {
        const response = await axios.post('http://localhost:3000/users', data);
        console.log('Response:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'Bienvenid@! 🦸',
          text: 'Te has registrado con exito, inicia sesión'
        });
        navigate('/');
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrio el error: '+error
        });
      }
      
    }
    
  };
  
  return (
    <div className="container-fluid p-3" style={{ backgroundImage: `url(${fondo2})`, backgroundSize: 'cover', height: '100%', width: '100%' }}>
    
      <div className="row justify-content-center align-items-center">
       
        <form className="form col-8 p-5 border border-dark rounded-5" onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(242, 242, 242, 0.9)' }}>
        <button className="btn btn-info" type="button" onClick={()=>navigate('/')}><strong> ← Atras </strong></button>
        <h1 className="text-center mb-3" style={{fontFamily: "'Bangers', cursive"}}>Invincible Fan Club</h1>

          <div className="form-group">
            <label htmlFor="inputUsuario"> <h5><strong>Nombre de usuario</strong></h5></label>
            <input  type="text" className="form-control mb-3" id="inputUsuario" placeholder="Ingrese su nombre de usuario" onChange={e => { setNombre(e.target.value) }} />
          </div>
            <label htmlFor="inputEmail"><h5><strong>Correo / Email</strong> </h5></label>
            <input type="text" className="form-control mb-3" id="inputEmail" placeholder="Ingrese su correo" onChange={e => { setEmail(e.target.value) }}/>
          
          <div className="form-group">
            <label htmlFor="innputPassword"> <h5><strong>Contraseña</strong></h5></label>
            <input value={password} type="password" className="form-control mb-3" id="inputPassword" placeholder="Ingrese su contraseña" onChange={e => { setPassword(e.target.value) }} />
          </div>
          <div className="form-group">
            <label htmlFor="innputConfPassword"> <h5><strong>Confirmar Contraseña</strong></h5></label>
            <input value={confpassword} type="password" className="form-control mb-3" id="inputConfPassword" placeholder="Verifique su contraseña" onChange={e => { setConfPassword(e.target.value) }} />
          </div>
          <div className="d-flex justify-content-center"> 
          <button type="submit" className="btn btn-info col-8 mt-3"><strong>Registrarse</strong></button> 
          </div>
        </form>
      </div>
    </div>
  );
}