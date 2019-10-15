import React from 'react';

export default function Header() {
    return (
    <div className="header">
        <h1>My Friends</h1>
        <div className="navi">
            <button>Home</button>
            <button>Friends</button>
            <button className="login-button">Log In</button>
        </div>
    </div>
    )
}