import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setScrolling(prevScrollPos.current < currentScrollPos && currentScrollPos > 50);
            prevScrollPos.current = currentScrollPos;
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Initial check for mobile
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [scrolling]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavLinkClick = () => {
        if (isMobile) {
            setMenuOpen(false);
        }
    };

    const headerStyle = {
        backgroundColor: '#bf8040',
        color: '#fff',
        padding: isMobile ? '5px' : '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000,
    };

    const imageStyle = {
        width: isMobile ? '50px' : '70px',
        height: 'auto',
        position: 'relative',
        right: isMobile ? '0' : '-10px',
        borderRadius: '50%',
    };

    const navStyle = {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        position: isMobile ? 'absolute' : 'static',
        top: isMobile && menuOpen ? '60px' : 'auto',
        right: isMobile && menuOpen ? '0' : 'auto',  // Right instead of left for mobile
        background: '#bf8040',
        width: isMobile ? '100%' : 'auto',
        display: isMobile && !menuOpen ? 'none' : 'flex',  // Hide when not open
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff',
        margin: isMobile ? '10px 0' : '0 15px',
    };

    const contactButtonStyle = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: isMobile ? '14px' : 'inherit',
    };

    const headerStyleWithAnimation = {
        ...headerStyle,
        transform: scrolling ? 'translateY(-100%)' : 'translateY(0)',
    };

    return (
        <header style={headerStyleWithAnimation}>
            <img
                src="https://i.ibb.co/ZBH9FQ8/Screenshot-2023-12-26-005954.png"
                alt="Profile"
                style={imageStyle}
            />
            
            <div onClick={toggleMenu} style={{ cursor: 'pointer', marginLeft: 'auto' }}>
                <div style={{ width: '30px', height: '3px', background: '#fff', margin: '6px 0' }}></div>
                <div style={{ width: '30px', height: '3px', background: '#fff', margin: '6px 0' }}></div>
                <div style={{ width: '30px', height: '3px', background: '#fff', margin: '6px 0' }}></div>
            </div>
            <nav>
                <ul style={navStyle}>
                    <li><Link to="/" style={linkStyle} onClick={handleNavLinkClick}>Home</Link></li>
                    <li><Link to="/services" style={linkStyle} onClick={handleNavLinkClick}>Services</Link></li>
                    <li><Link to="/contact" style={linkStyle} onClick={handleNavLinkClick}>Contact</Link></li>
                </ul>
            </nav>
            {!isMobile && (
                <Link to="/contact" style={contactButtonStyle}>Contact Us</Link>
            )}
        </header>
    );
};

export default Header;
