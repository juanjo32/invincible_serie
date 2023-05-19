import React from 'react'
import Publicacion from './Publicacion'

export default function Novedades() {
  const publicationData = {
    user: 'Sebas Profe',
    date: '2:03am, May 15-2023',
    text: 'la escena donde nolan mata a los soldados me recordo a homelander de the  boys en la 2 temporada  haciendo lo mismo en su casa,  no se si soy el unico pero cada ves me caen mejor los  clones xD  que buen capitulo lo mas triste es q solo queda  uno, ojala saquen pronto otra temporada PD: como se nota q se basaron en wanda(scarlet witch) para crear a eva xD',
    category: 'Comentario abierto',
    image: 'hero.png',
    comments: ['Wow no lo habia notado!', 'Que bendición.'],
  };

  const publicationData2 = {
    user: 'Brayayin',
    date: '8:36am, May 18-2023',
    text: 'Me gusta mucho esta serie por lo sangrienta que es ya que tengo problemsa mentales y siempre me imagino a gente muerta, los quiero a todos saluditos',
    category: 'Reseña',
    image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/Blood-Invincible-Amazon-1.png',
    comments: ['No me mates porfavor', '5co mentarios'],
  };

  const publicationData3 = {
    user: 'Porras',
    date: '9:03am, May 18-2023',
    text: 'Dada la no capacidad de estos autores de hacer un back en calidad y tiempo, considero pertinente rechazar la solicitud de suficiencia',
    category: 'Critica',
    image: 'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Shishiro-Botan_list_thumb.png',
    comments: ['Sebas manda a estos hptas a la mierda', 'El santandureño necesita windows para metodos cuantitativos KEKW'],
  };

  const publicationData4 = {
    user: 'Dennis',
    date: '9:12am, May 18-2023',
    text: 'Gas las exposiciones 🤢🤮',
    category: 'Critica',
    image: 'https://img.freepik.com/fotos-premium/payaso-asesino-dientes-humor-terror-cabello-azul_124507-69099.jpg',
    comments: ['Porque Andrea nos hace desarrollar dos exposiciones??????', 'Se necesitan dos semanas para preparar una exposicion 😭😭😭😭😭😭'],
  };


  return (
    <div>
      <h1 className="text-center mt-3 display-1" style={{fontFamily: "'Bangers', cursive", color: "#fee566"}}> Novedades </h1>
      <Publicacion {...publicationData} />
      <Publicacion {...publicationData2} />
      <Publicacion {...publicationData3} />
      <Publicacion {...publicationData4} />
      
    </div>
  )
}
