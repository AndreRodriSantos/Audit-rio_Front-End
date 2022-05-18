import './App.css';
import { logout } from './Js/api';
import { Link } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
      <div className='App'>
        <header className='header'>
          <div></div>
          <a onClick={logout} className="sair">Sair</a>
        </header>
        <Routes></Routes>
        </div>
  );
}
export default App;
