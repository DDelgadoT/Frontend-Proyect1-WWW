import './App.css';
import Login from './components/Login/Login';
import {Route} from 'react-router-dom'
import RegistroUsuario from './components/RegistroUsuario/RegistroUsuario';
import Populares from "./components/Populares/Populares";
import Nacionales from "./components/Nacionales/Nacionales";
import Internacionales from "./components/Internacionales/Internacionales";
import RegistroBeca from "./components/RegistroBeca/RegistroBeca";
import Detalles from './components/Detalles/Detalles';
import EditarBeca from './components/EditarBeca/EditarBeca';

function App() {
  return (
    <div className="App">
        <Route path="/:id" element={<Detalles />} />
        <Route path="/populares" element={<Populares />} />
        <Route path="/nacionales" element={<Nacionales />} /> 
        <Route path="/internacionales" element={<Internacionales />} />
        <Route path="/registroBeca" element={<RegistroBeca />} />
        <Route path="/editar/:id" element={<EditarBeca />} />
        <Route path="/registrarse" element={<RegistroUsuario />} />
      <Login/>
    </div>
  );
}

export default App;
