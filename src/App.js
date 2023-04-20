import './App.css';
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import Home from './Componunts/Home/Home';
import Movies from './Componunts/Movies/Movies';
import Erorr from './Componunts/Erorr/Erorr';
import Layout from './Componunts/LayOut/Layout';
import People from './Componunts/People/People';
import TvShows from './Componunts/TvShows/TvShows';
import ItemDetails from './Componunts/ItemDetails/ItemDetails';
import Registers from './Componunts/Registers/Registers';
import Login from './Componunts/Login/Login';
import { useContext, useEffect, useState } from 'react';
import jwtDecode from "jwt-decode"
import Profile from './Componunts/Profile/Profile';
import ProtectedRoute from './Componunts/ProtectedRoute/ProtectedRoute';
import ContextmediaProvider from './Componunts/Context/ContextMedia';
import { AuthContext } from './Componunts/Context/AuthContext';
import axios from 'axios';

function App() {
  let { userData, setUserData } = useContext(AuthContext)
  let [search, setSearch] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }
  }, [])
  let name;
  async function MultiSearch(name) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=f6dff9b1bb4c50824a9567e9e6bbccff&query=${name}`)
    console.log(data.results);
    setSearch(data.results)
  }
  function nameOfSearch(e) {
    name = e.target.value;
    if (name.length > 0) {
      MultiSearch(name);
    } else{
      setSearch([])
    }

  }
  function saveUserData() {
    let encryption = localStorage.getItem("token");
    let decryption = jwtDecode(encryption);
    setUserData(decryption);
    console.log(decryption);
  }

  // routing
  let routers = createBrowserRouter([{
    path: "/", element: <Layout setUserData={setUserData} nameOfSearch={nameOfSearch} userData={userData} />,
    children: [
      { index: true, element: <ProtectedRoute ><Home search={search} /></ProtectedRoute> },
      { path: "movies", element: <ProtectedRoute ><Movies /></ProtectedRoute> },
      { path: "people", element: <ProtectedRoute ><People /></ProtectedRoute> },
      { path: "details/:id/:type", element: <ProtectedRoute ><ItemDetails /></ProtectedRoute> },
      { path: "tvShows", element: <ProtectedRoute ><TvShows /></ProtectedRoute> },
      { path: "profile", element: <ProtectedRoute ><Profile /></ProtectedRoute> },
      { path: "registar", element: <Registers /> },
      { path: "login", element: <Login saveUserData={saveUserData} /> },
      { path: "*", element: <Erorr /> }
    ]
  }])
  // end Routing
  return <>

    <RouterProvider router={routers} />

  </>
}

export default App;
