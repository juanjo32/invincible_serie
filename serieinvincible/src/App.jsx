import * as React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Grid from './components/Grid';
import Login from './components/Login';
import Home from './components/Home';
import Novedades from './components/Novedades';
import CrearPublicacion from './components/CrearPublicacion';
import Usuario from './components/Usuario';
import Registro from './components/Registro';
import ProtectedRoute from './components/ProtectedRoute';
import useLocalStorage from './components/useLocalStorage';
import MyContext from './components/context';


function App() {

  const [UsuarioGlobal, setUsuarioGlobal, clearLocalStorage] = useLocalStorage( null, null);

  return (
    <MyContext.Provider value={{ UsuarioGlobal, setUsuarioGlobal, clearLocalStorage }}>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route path='/registro' element={<Registro/>} />
    <Route path="/home" element={<ProtectedRoute element={<Grid elemento={<Home/>}/>}/>}/> 
    {/* <Route path='/home' element={<Grid elemento={<Home/>}/>} /> */}
    <Route path="/novedades" element={<ProtectedRoute element={<Grid elemento={<Novedades/>}/>}/>}/> 
    <Route path="/upload" element={<ProtectedRoute element={<Grid elemento={<CrearPublicacion/>}/>}/>}/> 
    <Route path="/usuario" element={<ProtectedRoute element={<Grid elemento={<Usuario/>}/>}/>}/>
    </Routes>
    </div>
    </MyContext.Provider>
  );
}

export default App;
