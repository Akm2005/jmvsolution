// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section style={bannerStyle}>
            <div style={bannerContentStyle}>
                <h1 style={{ color: 'green', borderBottom: '2px solid green', fontFamily: 'Arial, sans-serif'}}>Your Trusted Insurance Partner</h1>
                <p>Providing Peace of Mind Through Comprehensive Coverage</p>
                <Link to='/contact'>
                <button style={ctaButtonStyle}>Get a Quote</button></Link>
            </div>
        </section>
    );
};

const bannerStyle = {
    background: '#333',
    color: '#fff',
    padding: '100px 20px',
    textAlign: 'center',
};

const bannerContentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
};

const ctaButtonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '1.2em',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default Header;
