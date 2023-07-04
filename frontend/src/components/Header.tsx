import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import IUserInterface from "../interfaces/IUserInterface";

export default function Header({userInfo} : any) {
    const navigate = useNavigate()
    function signOut() {
        localStorage.removeItem("userInfo");
        Swal.fire("Done", "Logout Successful", "success")
        navigate("/");
    }

    

    
    return <>
        <header className="header">
            <div className="topbar" style={{backgroundColor : "palevioletred" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-block d-md-flex align-items-center text-center">
                                <div className="me-3 d-inline-block">
                                    <a href="tel:1-800-555-1234"><i className="fa fa-phone me-2 fa fa-flip-horizontal"></i>+2348141680547 </a>
                                </div>
                                <div className="me-auto d-inline-block" style={{visibility : "hidden"}}>
                                    <span className="me-2 text-white">Get App:</span>
                                    <a className="pe-1" href="#"><i className="fab fa-android"></i></a>
                                    <a href="#"><i className="fab fa-apple"></i></a>
                                </div>
                                <div style={{visibility : "hidden"}} className="dropdown d-inline-block ps-2 ps-md-0">
                                    <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Choose location<i className="fas fa-chevron-down ps-2"></i>
                                    </a>
                                    <div className="dropdown-menu mt-0" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Global</a>
                                        <a className="dropdown-item" href="#">Arizona</a>
                                        <a className="dropdown-item" href="#">British columbia</a>
                                        <a className="dropdown-item" href="#">Commercial</a>
                                    </div>
                                </div>
                                <div className="social d-inline-block">
                                    <ul className="list-unstyled">
                                        <li><a href="#"> <i className="fab fa-facebook-f"></i> </a></li>
                                        <li><a href="#"> <i className="fab fa-twitter"></i> </a></li>
                                        <li><a href="#"> <i className="fab fa-linkedin"></i> </a></li>
                                        <li><a href="#"> <i className="fab fa-pinterest"></i> </a></li>
                                        <li><a href="#"> <i className="fab fa-instagram"></i> </a></li>
                                    </ul>
                                </div>
                                {/* <div  className="login d-inline-block">
                                    <a data-bs-toggle="modal" data-bs-target="#loginModal" href="#">Hello sign in<i className="fa fa-user ps-2"></i></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-light bg-white navbar-static-top navbar-expand-lg header-sticky">
                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
                    <Link className="navbar-brand active text-dark" to="/">
                        {/* <img className="img-fluid" src="images/logo.svg" alt="logo"/> */}
                        ChidesEstates
                    </Link>
                    <div className="navbar-collapse collapse justify-content-center">
                        <ul className="nav navbar-nav">

                            <li className="nav-item dropdown ">
                                <Link className="nav-link" to="/"  > Home</Link>
                            </li>
                            <li className="dropdown nav-item">
                                <Link to="/listings" className="nav-link" > Listings </Link>
                            </li>
                            <li className="dropdown nav-item">
                                <Link to="/booking" className="nav-link" > Book Reservation </Link>
                            </li>
                            <li className="dropdown nav-item">
                                <Link to="/estates" className="nav-link" > Estates </Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link " to="/about" >
                                    About
                                </Link>
                            </li>
                            {userInfo ? <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-capitalize" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {userInfo.username} <i className="fas fa-chevron-down fa-xs"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
                                    <li><Link className="dropdown-item" to="/properties-management">My Properties</Link></li>
                                    <li><Link className="dropdown-item" to="/estates-management">My Estates</Link></li>
                                    <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>

                                    <li><a href="/" onClick={signOut} className="dropdown-item" >Logout</a></li>

                                </ul>
                            </li> : <li className="nav-item dropdown">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>

                            </li>}

                        </ul>
                    </div>
                    <div className="add-listing d-none d-sm-block">
                   {userInfo? 
                        <Link className="btn btn-primary btn-md" to="/submit-property"> Submit Property </Link>:
                        <Link className="btn btn-primary btn-md" to="/register"> <i className="fa fa-user-plus"></i>Register </Link>
                   }
                    </div>
                </div>
            </nav>
        </header>

    </>
}