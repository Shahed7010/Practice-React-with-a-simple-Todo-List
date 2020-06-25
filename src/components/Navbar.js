import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to="/">TODO</Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">App</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )

}

export default Navbar