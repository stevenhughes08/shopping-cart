import React from "react";
import { Router, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Router>
                    <Link to="/" className="brand-logo">
                        Shopping
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart">My cart</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <i className="material-icons">Shopping Cart</i>
                            </Link>
                        </li>
                    </ul>
                </Router>
            </div>
        </nav>
    );
};

export default Navbar;
