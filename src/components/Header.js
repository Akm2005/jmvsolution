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
    right: isMobile && menuOpen ? '0' : 'auto',
    background: '#bf8040',
    width: isMobile ? '70%' : 'auto', // Set a smaller width for mobile
    display: isMobile && !menuOpen ? 'none' : 'flex',
};



    const linkStyle = {
        textDecoration: 'none',
        color: '#fff',
        margin: isMobile ? '10px 0' : '0 15px',
        textDecoration: 'none',
        color: '#fff',
        margin: isMobile ? '10px 0' : '0 15px',
        position: 'relative', // Add position relative
    };

    const contactButtonStyle = {
        backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: isMobile ? '14px' : 'inherit',
    transition: 'color 0.3s, transform 0.3s ease-in-out',
    };
    const contactButtonHoverStyle = {
        color: '#4CAF50',
        transform: 'translateY(-5px)', // Move the button 5px upward on hover
    };
    

    const headerStyleWithAnimation = {
        ...headerStyle,
        transform: scrolling ? 'translateY(-100%)' : 'translateY(0)',
        
    };
   
    const greenLine = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        color:'green',
        height: '2px',
        background: '#4CAF50', // Green color
        transform: 'scaleX(0)', // Initially, set the line to be invisible
        transformOrigin: 'bottom',
        transition: 'transform 0.3s ease-in-out',
    };
    
    const handleLinkHover = (event) => {
        const link = event.currentTarget;
        const line = link.querySelector('.green-line');
        link.style.color = '#4CAF50'; // Change link color to green on hover
        line.style.transform = 'scaleX(1)';
    };
    
    const handleLinkLeave = (event) => {
        const link = event.currentTarget;
        const line = link.querySelector('.green-line');
        link.style.color = '#fff'; // Change link color back to white on leave
        line.style.transform = 'scaleX(0)';
    };


    return (
        <header style={headerStyleWithAnimation}>
            <img
                src="https://i.ibb.co/ZBH9FQ8/Screenshot-2023-12-26-005954.png"
                alt="Profile"
                style={imageStyle}
            />
            {isMobile && (
            <div onClick={toggleMenu} style={{ cursor: 'pointer', marginLeft: 'auto' }}>
                <div style={{ width: '30px', height: '3px', background: '#fff', margin: '6px 0' }}></div>
                <div style={{ width: '30px', height: '3px', background: '#fff', margin: '6px 0' }}></div>
                <div style={{ width: '30px', height: '3px', background: '#fff', margin: '6px 0' }}></div>
            </div>
            )}
            <nav>
                <ul style={navStyle}>
                   <li>
    <Link
        to="/"
        style={linkStyle}
        onClick={handleNavLinkClick}
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}
    >
        Home
        <div className="green-line" style={greenLine}></div>
    </Link>
</li>
<li>
    <Link
        to="/services"
        style={linkStyle}
        onClick={handleNavLinkClick}
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}
    >
        Services
        <div className="green-line" style={greenLine}></div>
    </Link>
</li>
<li>
    <Link
        to="/contact"
        style={linkStyle}
        onClick={handleNavLinkClick}
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}
    >
        Contact us
        <div className="green-line" style={greenLine}></div>
    </Link></li>
                </ul>
            </nav>
            {!isMobile && (
                <Link to="tel:9319521316" style={{ ...contactButtonStyle, ...(menuOpen ? contactButtonHoverStyle : {}) }}>Call Now</Link>
            )}
        </header>
    );
};

export default Header;
