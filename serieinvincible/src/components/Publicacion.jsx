import React from "react";

export default function Publicacion({
  user,
  profileimg,
  date,
  text,
  category,
  image,
  comments,
}) {
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
                  style={{height:'20px', width:'20px'}}
                />
              <strong>{" "+user + " / " + category}</strong>
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
        </div>
      </div>
    </div>
  );
}
