import React from 'react'
import Publicacion from './Publicacion';
import { useState, useEffect } from 'react';
import axios from "axios";
import Loading from './Loading';


export default function Home() {

  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/publications");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const getData = async () => {
      await fetchData();
    };
  
    getData();
  }, []);


  function renderPublications() {
    if (data && data.length > 0) {
      return data.map((item, index) => {
        if (!item.isNovedad) {
          return (
            <Publicacion
              key={index}
              id={item._id}
              profileimg={item.user.image}
              user={item.user.name}
              date={item.date}
              text={item.content}
              category={item.tittle}
              image={item.image}
              comments={item.comments}
            ></Publicacion>
          );
        }
        return null; 
      });
      
    } else {
      return <center>
      <Loading/>
          </center>
    ;
    }
  }

  // eslint-disable-next-line
  const publicationDataArray = [
    {
      user: 'Sebas Profe',
      date: '2:03 AM, May 15-2023',
      text: 'la escena donde nolan mata a los soldados me recordo a homelander de the  boys en la 2 temporada  haciendo lo mismo en su casa,  no se si soy el unico pero cada ves me caen mejor los  clones xD  que buen capitulo lo mas triste es q solo queda  uno, ojala saquen pronto otra temporada PD: como se nota q se basaron en wanda(scarlet witch) para crear a eva xD',
      category: 'Comentario abierto',
      image: 'https://static01.nyt.com/images/2021/03/27/arts/26invincible6/26invincible6-mediumSquareAt3X-v3.jpg',
      comments: [
        { user: 'User1', content: 'Wow no lo habia notado!' },
        { user: 'User2', content: 'Que bendición.' }
      ],
    },
    {
      user: 'Brayayin',
      date: '8:36 AM, May 18-2023',
      text: 'Me gusta mucho esta serie por lo sangrienta que es ya que tengo problemsa mentales y siempre me imagino a gente muerta, los quiero a todos saluditos',
      category: 'Reseña',
      image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/Blood-Invincible-Amazon-1.png',
      comments: [
        { user: 'User1', content: 'No me mates porfavor' },
        { user: 'User2', content: '5co mentarios' }
      ]
    },
    {
      user: 'Porras',
      date: '9:03 AM, May 18-2023',
      text: 'Dada la no capacidad de estos autores de hacer un back en calidad y tiempo, considero pertinente rechazar la solicitud de suficiencia',
      category: 'Critica',
      image: 'https://hololive.hololivepro.com/wp-content/uploads/2020/07/Shishiro-Botan_list_thumb.png',
      comments: [
        { user: 'User1', content: 'Sebas manda a estos hptas a la mierda' },
        { user: 'User2', content: 'El santandureño necesita windows para metodos cuantitativos' }
      ]
    },
    {
      user: 'Dennis',
      date: '9:12 AM, May 18-2023',
      text: 'Gas las exposiciones 🤢🤮',
      category: 'Critica',
      image: 'https://img.freepik.com/fotos-premium/payaso-asesino-dientes-humor-terror-cabello-azul_124507-69099.jpg',
      comments: [{user: 'User1', content: 'Porque Andrea nos hace desarrollar dos exposiciones??????'},
      {user:'User2', content:'Se necesitan dos semanas para preparar una exposicion 😭😭😭😭😭😭'}
    ],
    },
    {
      user: 'Daniela Z',
    date: '10:33 AM, May 18-2023',
    text: 'Profe Sebas, si le pasa la suficiencia a Jf lo inivitamos a una cerveza en la bbc, sino 🔪🔪',
    category: 'Sugerencia amistosa',
    image: 'data:image/jpeg;base64,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',
    comments: [
      { user: 'User1', content: 'Jf, creo un fb mejorado, nos va a mantener' },
      { user: 'User2', content: 'profe, conquiste a Dennis y le damos una chocolatina' },
      { user: 'User3', content: 'Juanfe, vamos a comer en la buger master pa gastarnos el sueldo, aunque ya no tienes plata' }
    ]
    },{
      user: 'Esteban Ocampo',
      date: '10:45 AM, May 18-2023',
      text: 'Está muy bonita la página, pero está más bonito el creador✨🫣',
      category: 'Invitación a salir',
      image: 'data:image/jpeg;base64,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',
      comments: [
        { user: 'User1', content: 'JF no me ignores pls 😭' },
      ]
    },{
      user: 'Garzon',
    date: '10:57 AM, May 18-2023',
    text: 'Lean el archivo de las tormentas!!! la mejor saga de libros que se ha escrito desde la biblia, btw amo la clase de diseño de redes',
    category: 'dios',
    image: 'https://i.redd.it/ai-generated-kaladin-i-was-really-happy-with-the-results-v0-2zmtjqgpbuba1.jpg?width=1024&format=pjpg&auto=webp&s=456ffea93caf2c2e3e7dd6abb2ff3ec9e9108a5b',
    comments: [
      { user: 'User1', content: 'En lo personal yo odio redes, desperdicio de tiempo' },
      { user: 'User2', content: 'SIIIIIIII totalmente de acuerdo, pero no en redes' },
      { user: 'User3', content: 'vaya opinion de mierda, suicidate' }
    ]
    }

  ];

  return (
  <div>
  <h1 className="text-center mt-3 display-1" style={{fontFamily: "'Bangers', cursive", color: "#fee566"}}> HOME / COMUNIDAD </h1>
  <hr />
 
  {renderPublications()}
 
 
  {/* {publicationDataArray.map((publicationData, index) => (
      <Publicacion key={index} {...publicationData} />
    ))}*/}
  </div> 
  )
}