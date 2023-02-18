import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Builder from './pages/builder/Builder';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { checkAuthUser } from './utils/checkAuthUser';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  const { isAuth } = useAuth();

  React.useEffect(() => {
    checkAuthUser();
  }, [isAuth]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/builder" element={<PrivateRoutes />}>
        <Route path="/builder" element={<Builder />} />
      </Route>
    </Routes>
  );
};

export default App;
