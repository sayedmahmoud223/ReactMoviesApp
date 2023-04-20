import React from 'react'
import {Outlet, useNavigate} from "react-router-dom"
import Navbar from '../Navbar/Navbar'

export default function Layout({ userData, setUserData, nameOfSearch }) {
  let navigate = useNavigate();
  function logOut(){
    localStorage.removeItem("token");
    setUserData(null);
    navigate("/login")
  }
  return <>
    <Navbar logOut={logOut} nameOfSearch={nameOfSearch} userData={userData}/>
      <Outlet></Outlet>
  </>
}
