import React from "react";
import Publicacion from "./Publicacion";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Novedades() {
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
  
        if (item.isNovedad) {
          return (
            <Publicacion
              key={index}
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
        return null; // If item.isVerified is false, return null to skip rendering the component
      });
      
    } else {
      return <center>
      <Loading/>
          </center>
    ;
    }
  }

  return (
    <div>
      <h1
        className="text-center mt-3 display-1"
        style={{ fontFamily: "'Bangers', cursive", color: "#fee566" }}
      >
        {" "}
        Novedades y Noticias{" "}
      </h1>
      <hr />

      {renderPublications()}


      {/*  <Publicacion data={data[0]}></Publicacion> */}

      {/* {publicationDataArray.map((publicationData, index) => (
      <Publicacion key={index} {...publicationData} />
    ))} */}

      {/* {data.map((publicationData, index) => (
        <Publicacion key={index} {...publicationData} />
      ))} */}
    </div>
  );
}
