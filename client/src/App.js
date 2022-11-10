
import './App.css';


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
      <AppRouter />
    </div>
  );
}

export default App;
