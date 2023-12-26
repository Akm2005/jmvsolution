import React, { useState, useEffect } from 'react';

const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1000,
};

const mediaQuery = `@media (max-width: 768px) {
  ${footerStyle} {
    padding: 15px;
  }
}`;

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.offsetHeight;

            // Set a threshold value (adjust as needed)
            const threshold = 50;

            // Check if the user has scrolled close to the bottom of the page
            const isNearBottom = scrollY + windowHeight >= documentHeight - threshold;

            setIsVisible(isNearBottom);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const footerStyleWithAnimation = {
        ...footerStyle,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    };

    return (
        <footer style={footerStyleWithAnimation}>
            <style>{mediaQuery}</style>
            <p>&copy; 2023 jmvsolution</p>
        </footer>
    );
}

export default Footer;
