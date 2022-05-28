import { Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Login/>
    </div>
    </Router>
  );
}

export default App;
