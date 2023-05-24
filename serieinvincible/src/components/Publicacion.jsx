import React from "react";
import { useState } from "react";

export default function Publicacion({
  user,
  profileimg,
  date,
  text,
  category,
  image,
  comments,
}) {
  const [commentText, setCommentText] = useState('');
  const inpBackCol = { backgroundColor: '#2b3036', borderColor: '#86857e', outlineColor: 'none', width: '100%', display: 'flex' }

  const handleComment = async (event) => {
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
            <p key={index}>{"💬" + comment.user.name + ": " + comment.content}</p>
          ))}
          <div className="row">
            <div className="col-12"> <h6> <textarea type="text" className="text-white" style={inpBackCol} value={commentText} onChange={(event) => setCommentText(event.target.value)} placeholder="Espacio para que comentes ¡expresate!" /></h6></div>
          </div>
          <div className="row">
            <div className="text-end">  <button type="button" className="btn align-text-end text-white" style={{ backgroundColor: '#11141b', alignSelf: 'end' }} onClick={handleComment} >comentar!</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
