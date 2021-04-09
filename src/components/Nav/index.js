import React from "react";
import {Link} from 'react-router-dom';
import Headshot from '../../assets/images/escobar.jpg';
import "./index.css";




function Nav () {

        const imageStyle={
            height: "150px",
            width: "auto",
            borderRadius: "50%"
        }
        
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
                <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" href="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link" href="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div class="mx-auto my-2 order-0 order-md-1 position-relative">
                
                    <img src={Headshot} style={imageStyle} />
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                <ul class="navbar-nav mr-auto text-center">
                    <li class="nav-item">
                    <Link to="/resume" class="nav-link" href="/resume">Resume</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/contact" class="nav-link" href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;