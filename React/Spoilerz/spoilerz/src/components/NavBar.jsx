import React from 'react';

export const NavBar = () => {
    const styles = {
        border: '2px yellow solid',
        width: '50vw',
        margin: '0 auto'
    }
    return (
        <div>
            <h1 style={styles}>I am the Navbar Component</h1>
        </div>
    );
};