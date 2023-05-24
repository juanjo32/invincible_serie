import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faNewspaper, faUpload, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import MyContext from './context';


export default function LateralNavbar() {
  let tamanoIcon = "1x";
  const navigate = useNavigate();
  const { setUsuarioGlobal, clearLocalStorage} = useContext(MyContext);


  const logout = () => {
    setUsuarioGlobal(null);
    clearLocalStorage();
    //await signOut(auth);
  }


  const handleSignOut = (event) => {
    Swal.fire({
      title: 'Deseas cerrar sesión?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate('/')
      }
    });
  }

  return (
    
    <div className="col-1 d-flex flex-column vh-100 pt-3 border-end border-dark border-5" style={{ backgroundColor: "#202428", alignContent: "center", fontSize:"4vw" }}>
        <button onClick={() => navigate('/home')} title="Home / Comunidad" className="BtnNavbar">
          <FontAwesomeIcon icon={faHouse} size={tamanoIcon}/>
        </button>

        <button onClick={() => navigate('/novedades')} title="Novedades y noticias" className="BtnNavbar">
          <FontAwesomeIcon icon={faNewspaper} size={tamanoIcon} />
        </button>

        <button onClick={() => navigate('/upload')} title="Crear una publicación" className="BtnNavbar">
          <FontAwesomeIcon icon={faUpload} size={tamanoIcon} />
        </button>

        <button onClick={() => navigate('/usuario')} title="Usuario" className="BtnNavbar">
          <FontAwesomeIcon icon={faUser} size={tamanoIcon} />
        </button>

        <button onClick={()=> handleSignOut()} title="Cerrar sesión" className="BtnNavbar">
          <FontAwesomeIcon icon={faArrowRightFromBracket} size={tamanoIcon} />
        </button>

      </div>
  )
}
