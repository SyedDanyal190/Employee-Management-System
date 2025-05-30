import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../src/context/Authcontext'; // update this path accordingly

const LogOut: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();          // clear auth state and token
    navigate('/login'); // redirect to login page
  }, [logout, navigate]);

  return null; // no UI needed, it just logs out and redirects
};

export default LogOut;
