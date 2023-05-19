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


function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Login/>}/>
    <Route path='/registro' element={<Registro/>} />
    <Route path='/home' element={<Grid elemento={<Home/>}/>} />
    <Route path='/novedades' element={<Grid elemento={<Novedades/>}/>} />
    <Route path='/upload' element={<Grid elemento={<CrearPublicacion/>}/>}/>
    <Route path='/usuario' element={<Grid elemento={<Usuario/>}/>}/>
    </Routes>
    </div>
  );
}

export default App;
