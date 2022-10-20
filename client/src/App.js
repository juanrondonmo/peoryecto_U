import logo from './logo.svg';
import './App.css';

import { Navegacion } from './componentes/navegacion/navegacion';
import { Login } from './componentes/login/login';
import { Register } from './componentes/login/Register';
import { AppRouter } from './router/AppRouter';


function App() {
  return (
    <div className="app_container">
      {/* <Login /> */}
      {/* <Register /> */}
      <AppRouter />
    </div>
  );
}

export default App;
