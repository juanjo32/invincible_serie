import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function CrearPublicacion() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const date = new Date();
  const inpBackCol = { backgroundColor: '#2b3036', borderColor: '#86857e', outlineColor: 'none' }


  function formatDateTime(date) {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = date.toLocaleString('en-US', options);
    const formattedDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
    const formattedYear = date.getFullYear();
  
    return `${formattedTime}, ${formattedDate}-${formattedYear}`;
  }


  const handlePublicar = async(event) => {
    event.preventDefault();
    if (text==='' || category ==='' || image ===''){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Complete los campos',
        background: '#e8e8e8'
      });
    }else{

      const data = {
        tittle: category,
        content: text,
        image: image,
        date: date,
        user: 'Yo',
        id: '646d5f6d0d5f9c1fc5f81325'
      };
      
      try {
        const response = await axios.post('http://localhost:3000/publications', data);
        console.log('Response:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'Publicado! 🌟',
          text: 'Tu publicación fue completada con exito'
        });
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrio el error: '+error
        });
      }


      
      setCategory('');
      setImage('');
      setText('');
    }
  }

  return (
    <div>
      <h1 className="text-center mt-3 display-1" style={{ fontFamily: "'Bangers', cursive", color: "#fee566" }}>Crear una publicación</h1>
      <hr />
      <div className="container mb-4 mt-5">
        <div className="card bg-dark text-white">
          <div className="card-header">
            <div className='row'>
              <div className="col-6">
                <strong>
                  {"Current User / "}  <input type="text" className="text-white" style={inpBackCol} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Categoria" />
                </strong>
              </div>
              <div className="col-6 text-end text-muted">{formatDateTime(date)}</div>
            </div>
          </div>
          <div className="card-header">
            <div className='row'>
              <div className="col-12">
                <input type="text" value={image} className="text-white" style={{ ...inpBackCol, width: '100%' }} onChange={(event) => setImage(event.target.value)} placeholder="ingresa el link de tu imagen, dale color a tu publicación!" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row" style={{ display: 'flex' }}>
              <div className="col-md-2 col-lg-2">
                <img src={image} className="img-fluid" alt="Imagen de tu publicación" style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="col-md-10 col-lg-10">
                <p className="card-text">
                  <textarea value={text} className="text-white" style={{ ...inpBackCol, width: '100%' }} onChange={(event) => setText(event.target.value)} placeholder="Espacio para ingresar texto, expresate ante la comunidad!" />
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" className="btn col-4" style={{ backgroundColor: '#fee566' }} onClick={handlePublicar}>Publicar!</button>
            <style>
              {`
                .btn:hover {
                 color: black !important;
                 background-color: #feea85 !important;
                }
              `}
            </style>

          </div>
        </div>
      </div>
    </div>
  );
}

