import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";

const PremierePage = () => {
    return (
        <div>
            <h1>Hang Your Artist !</h1>
            <Link to="/Home">
            <button>Let's Rope</button>
            </Link>
        </div>
    );
};

export default PremierePage;