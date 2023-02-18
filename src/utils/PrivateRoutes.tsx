import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useRedux';

const PrivateRoutes = () => {
  const loading = useAppSelector((state) => state.authUser.loading);

  if (loading) {
    return <>loading...</>;
  }
  return !loading ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
