import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ Component }) {
  console.log(localStorage.getItem("DashBoardUserLoggedIn"))
  if (!localStorage.getItem("DashBoardUserLoggedIn")) {
    return <Navigate to="/" />;
  }
  return <Component />;
}
export default RequireAuth;
