import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';

function App() {

  

  return (
    <HashRouter>
      <div className="App">
		<div className='pokeball-image'></div>
            <Routes>
                  {/* ruta para iniciar sesion  */}
                  <Route path='/' element={<Login/>}/>
                  {/* rutas para ver la informacion de los pokemon */}
                  <Route element={<ProtectedRoutes/>}>
                  <Route path='/character' element={<Pokedex/>}/>
                  <Route path='/character/:id' element={<PokemonDetails/>}/>
                  </Route>
            </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
