import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoutes = () => {

  const isUserSignedIn = () => {
    const tokenData = JSON.parse(localStorage.getItem("auth"));
    return !!tokenData?.user;
  };

  return (
    isUserSignedIn() ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoutes;
