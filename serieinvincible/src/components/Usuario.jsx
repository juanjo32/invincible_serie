import React, { useState } from 'react';
/* import AvatarEditor from 'react-avatar-editor';
import vacio from '../styles/imgs/empty.jpg'; */
import axios from 'axios';
import { useEffect } from 'react';
import MyContext from './context';
import { useContext } from 'react';

export default function ProfileImageSelect() {
    /* const [profileImage, setProfileImage] = useState(vacio);
    const [selectedImage, setSelectedImage] = useState(null);
    const [editor, setEditor] = useState(null);
    const [editing, setEditing] = useState(false); */

    const [img, setImg] = useState('');
    const [imgInput, setImgInput] = useState('');

    const [data, setData] = useState('');
    const inpBackCol = { backgroundColor: '#2b3036', borderColor: '#86857e', outlineColor: 'none' }
    const { UsuarioGlobal } = useContext(MyContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users/');
            setData((response.data)); // Save the response data
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubir = async(event) => {
        setImg(imgInput);
        setImgInput('');
        console.log('aca va a actualizar el user url image')
    }


    /*  const handleImageSelect = (event) => {
         const file = event.target.files[0];
         setSelectedImage(URL.createObjectURL(file));
         setEditing(true);
     }; */

    /*  const handleImageUpload = () => {
         if (editor) {
             const canvas = editor.getImageScaledToCanvas();
             const croppedImage = canvas.toDataURL();
             setProfileImage(croppedImage);
             setEditing(false);
         }
     }; */
    return (
        <div>
            <h1 className="text-center mt-3 mb-1 display-1" style={{ fontFamily: "'Bangers', cursive", color: "#fee566" }}> Tu perfil </h1>
            <hr />
            <div className='container text-center'>
                <div className='row mt-2 mb-3'>
                    <div className='col-12'> <strong>Usuario:</strong>{data.message}</div>
                    <div className='col-12'> <strong>Correo:</strong> {data.email} </div>
                </div>
                <div className='row mb-2'>
                <div className='col-12'><img src={img} className="img-fluid rounded" alt="Ingresa una imagen de perfil valida 📷" width="125" height="125"/></div>
                </div>
                
                <div className="row mt-2 mb-5 justify-content-center">
                    <div className="col-8 p-0">
                        <input type="text" value={imgInput} className="form-control text-white" style={inpBackCol} onChange={(event) => setImgInput(event.target.value)} placeholder="Ingresa el link de la imagen para tu perfil" />
                    </div>
                    <div className="col-2 p-0 text-start">
                        <button type="button" className="btn btn-warning" onClick={handleSubir} >Guardar</button>
                    </div>
                </div>


                {/* <div className='row mb-1 mt-4'>
                    <div className='col-6 text-end'>
                        {!editing && (
                            <img src={profileImage} alt="Error :/" className="img-fluid rounded border border-dark" ></img>
                        )
                        }

                        {editing && (
                            <>
                                {selectedImage && (
                                    <AvatarEditor
                                        ref={(ref) => setEditor(ref)}
                                        image={selectedImage}
                                        width={130}
                                        height={130}
                                        color={[0, 0, 0, 0.4]}
                                        scale={1}
                                        crossOrigin="anonymous"
                                        style={{ height: 'auto', aspectRatio: 1 / 1 }}
                                    />
                                )}

                            </>
                        )}
                    </div>
                    <div className='col-3' style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="d-flex justify-content-start row">
                            <label for="inputImage" className="btn text-center" style={{ backgroundColor: '#fee566' }}>Cambiar foto</label>
                            <input type="file" id="inputImage" style={{ display: 'none' }} onChange={handleImageSelect} accept="image/*"></input>
                            {editing && selectedImage && <button className='btn mt-2' style={{ backgroundColor: '#22788d' }} onClick={handleImageUpload}><strong>Confirmar</strong></button>}
                        </div>
                    </div>


                </div> */}
            </div>
        </div>
    )
}
