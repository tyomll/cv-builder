import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/mainLayout/MainLayout';
import { useAuth } from './hooks/useAuth';
import Builder from './pages/builder/Builder';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import Templates from './pages/templates/Templates';
import { checkAuthUser } from './utils/checkAuthUser';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  const { isAuth } = useAuth();

  React.useEffect(() => {
    checkAuthUser();
  }, [isAuth]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/profile" element={<Profile />} />

          <Route path="/builder" element={<Builder />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
