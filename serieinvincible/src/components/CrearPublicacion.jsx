import React from 'react'
import { useState } from 'react';
import Publicacion from './Publicacion';

export default function CrearPublicacion() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const date = new Date();
  return (
    <div>
      <h1 className="text-center mt-3 display-1" style={{ fontFamily: "'Bangers', cursive", color: "#fee566" }}> Crear una publicación</h1>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Text" />
      <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
      <input type="text" value={image} onChange={(event) => setImage(event.target.value)} placeholder="Image" />

      <Publicacion
        user={'Usuario'}
        date={date.toISOString()}
        text={text}
        category={category}
        image={image}
        comments={[]}
      />
    </div>


  )
}

