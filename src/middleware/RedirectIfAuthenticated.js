import React from "react";
import { Navigate } from "react-router-dom";

function RedirectIfAuthenticated({ Component }) {
  if (localStorage.getItem("DashBoardUserLoggedIn")) {
    return <Navigate to="/dashboard" />;
  }
  return <Component />;
}
export default RedirectIfAuthenticated;
