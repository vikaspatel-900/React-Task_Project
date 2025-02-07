import React from "react";
import logo from '../assets/logo.webp'
import '../App.css'
import { Navdata } from "../contants/Navbar";
import { NavLink } from "react-router-dom";


const NavMenu = () => {
    return (

        <nav className="navbar navbar-dark  fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} width={150} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar"
                    aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end "
                    tabindex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">

                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <NavLink style={{textDecoration:"none"}} to={"/"}>Home</NavLink>
                        {
                         Navdata.map((data)=>{
                           return <NavLink style={{textDecoration:"none"}} to={data.href}>{data.title}</NavLink>
                         })
                        }

                        <NavLink to={"/contact"}><button>Contact US</button></NavLink>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default NavMenu;
