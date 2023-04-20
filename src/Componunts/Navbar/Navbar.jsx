import React from 'react'
import { NavLink, Link } from "react-router-dom"
export default function Navbar({ userData, logOut, nameOfSearch }) {
    let Nav = ["Movies", "Tv Shows", "People", "Networks"];
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand pt-3" href="#"><h3>Noxe</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {userData ? <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/`}>Home</NavLink>
                        </li>
                        {Nav.map((ele, ind) => <li key={ind} className="nav-item">
                            <NavLink className="nav-link" to={`${ele.split(" ").join("")}`}>{ele}</NavLink>
                        </li>)}
                    </ul> 
                        
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            

                            <li className="nav-item">
                                <input onChange={nameOfSearch} placeholder='Search' className='rounded-pill mt-1 p-1 border0' type="search" name='search' />
                            </li>
                            <li className="nav-item">
                                <span className="cursor nav-link" onClick={logOut}>Logout</span>
                            </li>
                            <li className="nav-item">
                                {userData ? <NavLink className="nav-link" to={`profile`}>{userData.first_name} Profile</NavLink>:<NavLink className="nav-link" to={`profile`}>Profile</NavLink>}
                                
                            </li>
                        </ul>
                    </> 
                    : <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`registar`}>Registers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`login`}>Login</NavLink>
                        </li>

                    </ul>}
                    
                    

                </div>
            </div>
        </nav>

    </>
}
