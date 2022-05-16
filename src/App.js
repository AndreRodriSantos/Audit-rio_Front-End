import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Principal from './Principal'
import Reserva from './Reserva'
import { Component } from 'react';
import { logout } from './Js/api';
import Cadastro from './Cadastro';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Link className='link' to='/Login'>Login</Link>
        <Link className='link' to='/Cadastro'>Cadastro</Link>
        <Link className='link' to='/Principal'>Principal</Link>
        <Link className='link' to='/Reserva'>Reserva</Link>
        <a onClick={logout} className="sair">Sair</a>
      </header>
      <Routes>
        <Route path='*' element={<Login/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Cadastro' element={<Cadastro/>}></Route>
        <Route path='/Principal' element={<Principal />}></Route>
        <Route path='/Reserva' element={<Reserva />}></Route>
      </Routes>
    </div>
  );
}
export default App;
