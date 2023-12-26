import React from 'react';
import Services from './Services';
import Partners from './Partners';
import WhyChooseUs from './Whychoosus';

const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <section style={bannerStyle}>
                <div style={bannerContentStyle}>
                    <h1>Your Trusted Insurance Partner</h1>
                    <p>Providing Peace of Mind Through Comprehensive Coverage</p>
                    <button style={ctaButtonStyle}>Get a Quote</button>
                </div>
            </section>

            <Services />
            <Partners />

            <WhyChooseUs />

            {/* Social Media Icons */}
            <section style={socialMediaSectionStyle}>
                <div style={socialMediaContainerStyle}>
                    <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-square" style={socialMediaIconStyle}>facebook</i>
                    </a>
                    <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter-square" style={socialMediaIconStyle}>twitter</i>
                    </a>
                    <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram-square" style={socialMediaIconStyle}>instagram</i>
                    </a>
                    {/* Add more social media icons as needed */}
                </div>
            </section>

            {/* Contact Section */}
            <section style={contactSectionStyle}>
                <div style={contactContainerStyle}>
                    <div>
                        <p style={contactInfoStyle}>Call: <a href="tel:+17052721331">931-952-1316</a></p>
                        <p style={contactInfoStyle}>Email: <a href="mailto:info@example.com">info@ensurepolicy.com</a></p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={testimonialsSectionStyle}>
                <h2>What Our Clients Say</h2>
                <div style={testimonialContainerStyle}>
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
                    <section style={aboutSectionStyle}>
                <div style={aboutContentStyle}>
                    <h2>About Us</h2>
                    <p>Your Insurance Broker is committed to providing top-notch insurance solutions with a focus on customer satisfaction. With years of experience, we understand the importance of protecting what matters most to you.</p>
                </div>
            </section>
                </div>
            </section>

            
           
        </div>
    );
};

// Styles
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

// Social Media Icons styles
const socialMediaSectionStyle = {
    background: '#f5f5f5',
    padding: '20px 0',
    textAlign: 'center',
};

const socialMediaContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const socialMediaIconStyle = {
    fontSize: '2em',
    color: '#333',
    margin: '0 10px',
    cursor: 'pointer',
};

// Contact Section styles
const contactSectionStyle = {
    background: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
};

const contactContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const contactInfoStyle = {
    margin: '0 20px',
    fontSize: '1.2em',
};

// Testimonials Section styles
const testimonialsSectionStyle = {
    background: '#333',
    color: '#fff',
    padding: '80px 20px',
    textAlign: 'center',
};

const testimonialContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
};

const testimonialStyle = {
    maxWidth: '400px',
    textAlign: 'left',
    marginBottom: '40px',
};

// About Us Section styles
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

export default Home;
