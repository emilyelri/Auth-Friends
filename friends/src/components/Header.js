import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <div className="header">
        <h1>My Friends</h1>
        <div className="navi">
            <Link to='/'><button>Home</button></Link>
            <Link to='/friends'><button>Friends</button></Link>
            <Link to='/login'><button className="login-button">Log In</button></Link>
        </div>
    </div>
    )
}