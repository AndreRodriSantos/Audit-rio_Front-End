import './App.css';
import { logout } from './Js/api';
import Routes from './routes';

function App() {
  return (
      <div className='App'>
        <header className='header'>
          <a href='/Login'>Login</a>
          <a href='/Cadastro'>Cadastro</a>
          <a href='/Principal'>Principal</a>
          <a href='/Reserva'>Reserva</a>
          <a onClick={logout}>Sair</a>
        </header>
        <Routes></Routes>
        </div>
  );
}
export default App;
