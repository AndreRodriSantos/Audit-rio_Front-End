import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Principal from './Principal'
import Reserva from './Reserva'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Link className='link' to='/Login'>Login</Link>
        <Link className='link' to='/Principal'>Principal</Link>
        <Link className='link' to='/Reserva'>Reserva</Link>
      </header>
      <Routes>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Principal' element={<Principal />}></Route>
        <Route path='/Reserva' element={<Reserva />}></Route>
      </Routes>
    </div>
  );
}
export default App;
