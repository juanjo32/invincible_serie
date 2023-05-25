import axios from "axios";
import React from "react";
import { useState } from "react";
import MyContext from './context';
import { useContext } from 'react';
import Swal from 'sweetalert2';

export default function Publicacion({
  user,
  id,
  profileimg,
  date,
  text,
  category,
  image,
  comments,
}) {
  const [commentText, setCommentText] = useState('');
  const inpBackCol = { backgroundColor: '#2b3036', borderColor: '#86857e', outlineColor: 'none', width: '100%', display: 'flex' }
  const { UsuarioGlobal } = useContext(MyContext);
 
  const data = {
    user: UsuarioGlobal[0].token.user.name,
    content: commentText
  };

  const handleComment = async () => {
    try {
      const response = await axios.post('http://localhost:3000/publications/'+id+'/comments', data, {
        headers: {
          'Authorization': `Bearer ${UsuarioGlobal[0].token.access_token}`
        }
      });

      Swal.fire({
        icon: 'success',
        title: 'Publicado! 🌟',
        text: 'Tu comentario fue completado con éxito'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrio el error: ' + error
      });
    }
  }

  return (
    <div className="container mb-4">
      <div className="card bg-dark text-white">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <img
                src={profileimg}
                className="img-fluid rounded"
                alt="👤"
                style={{ height: '20px', width: '20px' }}
              />
              <strong>{" " + user + " / " + category}</strong>
            </div>
            <div className="col-6 text-end text-muted">{date}</div>
          </div>
        </div>
        <div className="card-body ">
          <div className="row" style={{ display: "flex" }}>
            <div className="col-md-2 col-lg-2">
              <img
                src={image}
                className="img-fluid rounded"
                alt="Error al cargar la imagen 😢"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-10 col-lg-10">
              <p className="card-text">{text}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <h6>Comentarios:</h6>
          {comments.map((comment, index) => (
            <p key={index}>{"💬" + comment.user + ": " + comment.content}</p>
          ))}
          <div className="row">
            <div className="col-12"> <h6> <textarea type="text" value={commentText} className="text-white" style={inpBackCol} onChange={(event) => setCommentText(event.target.value)} placeholder="Espacio para que comentes ¡expresate!" /></h6></div>
          </div>
          <div className="row">
            <div className="text-end">  <button type="button" className="btn align-text-end text-white" style={{ backgroundColor: '#11141b', alignSelf: 'end' }} onClick={handleComment} >comentar!</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
