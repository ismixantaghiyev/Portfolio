import React from 'react'
import "./Navbar.css"
import { BsFillPersonFill } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';
import { BsTelephoneInbound } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to="/">
                    <div className='flex'>
                        <BsFillPersonFill style={{ fontSize: "60px" }} />
                        <li>Haqqımda</li>
                    </div>
                </NavLink>
                <NavLink to="/Layiheler">
                    <div className='flex'>
                        <MdComputer style={{ fontSize: "55px" }} />
                        <li>Layihələrim</li>
                    </div>
                </NavLink>
                <NavLink to="/Elaqe">
                    <div className='flex'>
                        <BsTelephoneInbound style={{ fontSize: "45px" }} />
                        <li>Mənimlə Əlaqə</li>
                    </div>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navbar