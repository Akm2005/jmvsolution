// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section style={socialMediaSectionStyle}>
                <div style={{socialMediaContainerStyle }}>
                    {/* Social Media Icons with new design */}
                    <a href="https://www.facebook.com/ensurepolicy?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook" style={socialMediaIconStyle}></i>
                    </a>
                    <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter" style={socialMediaIconStyle}></i>
                    </a>
                    <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" style={socialMediaIconStyle}></i>
                    </a>
                    {/* Add more social media icons as needed */}
                </div>
            </section>

            <section style={contactSectionStyle}>
                <div style={contactContainerStyle}>
                    {/* Call Section */}
                    <div style={contactInfoStyle}>
                        <p>Call Us</p>
                        <a style={{color:"green"}} href="tel:+17052721331">931-952-1316</a>
                    </div>

                    {/* Email Section */}
                    <div style={contactInfoStyle}>
                        <p>Email Us</p>
                        <a style={{color:"green"}} href="mailto:info@example.com styl">info@ensurepolicy.com</a>
                    </div>
                </div>
            </section>

            <section style={testimonialsSectionStyle}>
                {/* Testimonials Section */}
                <h2 style={{color:'green'}}>What Our Clients Say</h2>
                <div style={testimonialContainerStyle}>
                    {/* Testimonials content goes here */}
                    <div style={testimonialStyle}>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisl convallis, vel pellentesque orci scelerisque."</p>
                        <p>- John Doe</p>
                    </div>
                    <div style={testimonialStyle}>
                        <p>"Sed vel neque vel turpis luctus commodo non in odio. Fusce vitae commodo quam."</p>
                        <p>- Jane Smith</p>
                    </div>
                    <div style={testimonialStyle}>
                        <p>"Aliquam erat volutpat. Sed eu dignissim ligula. Proin vel tempor elit, vel feugiat dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
                        <p>- Michael Johnson</p>
                    </div>
                    <div style={testimonialStyle}>
                        <p>"Vivamus sit amet orci eu orci ullamcorper lacinia. Integer luctus ut purus at congue. Sed vel ipsum in nisi ullamcorper gravida."</p>
                        <p>- Sarah Williams</p>
                    </div>
                    <div style={testimonialStyle}>
                        <p>"Ut fringilla, ipsum vel cursus lacinia, tellus odio sollicitudin odio, vitae venenatis quam nisl vel ligula."</p>
                        <p>- David Miller</p>
                    </div>
                    
                </div>
            </section>

            <section style={aboutSectionStyle}>
                {/* About Us Section */}
                <div style={aboutContentStyle}>
                    <h2 style={{color:'green'}}>About Us</h2>
                    <p>Your Insurance Broker is committed to providing top-notch insurance solutions with a focus on customer satisfaction. With years of experience, we understand the importance of protecting what matters most to you.</p>
                </div>
            </section>

            <section style={footerSectionStyle}>
                <div style={footerContainerStyle}>
                © 2023 <Link style={{color:'green'}} to='/'>
                jmvsolution.
                </Link> All Rights Reserved
                </div>
            </section>
        </div>
    );
};

// Styles (these styles can be combined or adjusted as needed)
const socialMediaSectionStyle = {
    background: '#f5f5f5',
    padding: '20px 0',
    margin:'2px 6px',
    textAlign: 'center',
};

const socialMediaContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin:'2px 6px',
};

const socialMediaIconStyle = {
    fontSize: '2em',
    color: '#333',
    margin: '0 10px',
    cursor: 'pointer',
};

const contactSectionStyle = {
    background: '#333',
    color: 'green',
    padding: '20px 0',
    textAlign: 'center',
};

const contactContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
};

const contactInfoStyle = {
    margin: '10px 0',
    fontSize: '1.2em',
};

const testimonialsSectionStyle = {
    background: '#333',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
};

const testimonialContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '20px',
};

const testimonialStyle = {
    maxWidth: '400px',
    textAlign: 'left',
    marginBottom: '40px',
};

const aboutSectionStyle = {
    background: '#333',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
};

const aboutContentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
};

const footerSectionStyle = {
    background: '#333',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
};

const footerContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
};

export default Footer;
