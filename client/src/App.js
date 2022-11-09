import logo from './logo.svg';
import './App.css';

import { Navegacion } from './componentes/navegacion/navegacion';
import { Login } from './componentes/login/login';
import { Register } from './componentes/login/Register';
import { AppRouter } from './router/AppRouter';
import { useDispatch } from 'react-redux';
import { loadMovies } from './redux/userSlice';
import { useEffect } from 'react';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies())
},[])


  return (
    <div className="app_container">
      {/* <Login /> */}
      {/* <Register /> */}
      <AppRouter />
    </div>
  );
}

export default App;
