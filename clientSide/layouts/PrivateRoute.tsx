// components/PrivateRoute.tsx
import React, { JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../src/context/Authcontext';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/logIn" replace />;
};

export default PrivateRoute;
