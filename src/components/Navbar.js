import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to="/">TODO</Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/">App</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">about</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )

}

export default Navbar