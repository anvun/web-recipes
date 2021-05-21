import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from './index';
import Loader from './components/Loader';

const App = () => {
  const {auth} = useContext(Context)
  const [, loading, ] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Sidebar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
