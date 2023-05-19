import React from 'react'
import Publicacion from './Publicacion'

export default function Novedades() {
  const publicationData = {
    user: 'Robert Kirkman',
    date: '3:03am, May 18-2023',
    text: 'va a salir nueva temporada!',
    category: 'Anuncio',
    image: 'https://m.media-amazon.com/images/I/61YLVtIOhZL._RI_SX720_FMjpg_.jpg',
    comments: ['😁😁😁', 'Que bendición.'],
  };



  return (
    <div>
      <h1 className="text-center mt-3 display-1" style={{fontFamily: "'Bangers', cursive", color: "#fee566"}}> Novedades y Noticias </h1>
      <Publicacion {...publicationData} />
    </div>
  )
}
