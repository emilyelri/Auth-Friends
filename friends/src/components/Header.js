import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <div className="header">
        <Link to='/friends' className="logo"><h1>My Friends</h1></Link>
        <div className="navi">
            <Link to='/friends'><button>Friends</button></Link>
            <Link to='/add'><button>Add Friend</button></Link>
            <Link to='/login'><button className="login-button">Log In</button></Link>
        </div>
    </div>
    )
}