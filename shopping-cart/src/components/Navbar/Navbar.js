import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <Router>
                <div className="container">
                    <Link to="/" className="brand-logo">
                        Shopping
                    </Link>

                    <ul className="right">
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart">My Cart</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <i className="material-icons">shopping_cart</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Router>
        </nav>
    );
};

export default Navbar;
