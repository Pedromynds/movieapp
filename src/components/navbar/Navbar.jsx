
import React from 'react'
import "./Navbar.css";
import { FaHome, FaHeart, FaChartLine, FaCalendarAlt, FaUsers, FaComments, FaCog, FaUser } from "react-icons/fa";
import { Link } from 'react-router';

function Navbar() {
    return (
        <div className='sidebar'>

            <div >
                <div className='logo'>
                    <h2>Logo</h2>
                </div>

                <nav className='menu'>
                    <div className='menu-icons-top'>
                        <Link to="/"><FaHome /> Home</Link>
                        <Link to="/favoritos"><FaHeart /> Favorites</Link>
                        <Link to="/emAlta"><FaChartLine />Trending</Link>
                        <Link to="/"><FaCalendarAlt /> Coming soon</Link>
                    </div>
                    
                    <div className='menu-icons-bottom'>
                        <Link to="/"><FaUsers /> Community</Link>
                        <Link to="/"><FaComments /> Social</Link>
                    </div>

                </nav>
            </div>

            <div className='menu-bottom'>
                <Link to="/"><FaCog /> Settings</Link>
                <Link to="/"><FaUser /> Logout</Link>
            </div>
        </div>
    )
}

export default Navbar




