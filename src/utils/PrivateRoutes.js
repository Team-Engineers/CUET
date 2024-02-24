import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoutes = () => {
  const isUserSignedIn = () => {
    const tokenData = JSON.parse(localStorage.getItem("auth"));
    return tokenData && new Date().getTime() < tokenData.accessToken.expiry;
  };
  
  return (
    isUserSignedIn() ? <Outlet/> : <Navigate to = "/login"/>
  )
}

export default PrivateRoutes
