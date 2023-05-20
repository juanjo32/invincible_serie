import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import vacio from '../styles/imgs/empty.jpg';

export default function ProfileImageSelect() {
    const [profileImage, setProfileImage] = useState(vacio);
    const [selectedImage, setSelectedImage] = useState(null);
    const [editor, setEditor] = useState(null);
    const [editing, setEditing] = useState(false);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setEditing(true);
    };

    const handleImageUpload = () => {
        if (editor) {
            const canvas = editor.getImageScaledToCanvas();
            const croppedImage = canvas.toDataURL();
            setProfileImage(croppedImage);
            setEditing(false);
        }
    };
    return (
        <div>
            <h1 className="text-center mt-3 mb-1 display-1" style={{ fontFamily: "'Bangers', cursive", color: "#fee566" }}> Tu perfil </h1>
            <hr />
            <div className='container text-center'>
                <div className='row mt-2'>
                    <div className='col-12'> <strong>Usuario:</strong> Nombre Usuario </div>
                    <div className='col-12'> <strong>Correo:</strong> correo.electronico@gmail.com</div>
                </div>
                <div className='row mb-1 mt-4'>
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
                        <div class="d-flex justify-content-start row">
                            <label for="inputImage" class="btn text-center" style={{ backgroundColor: '#fee566' }}>Cambiar foto</label>
                            <input type="file" id="inputImage" style={{ display: 'none' }} onChange={handleImageSelect} accept="image/*"></input>
                            {editing && selectedImage && <button className='btn mt-2' style={{ backgroundColor: '#22788d' }} onClick={handleImageUpload}><strong>Confirmar</strong></button>}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
