import React from 'react';

const WhyChooseUsAndHappyClients = () => {
    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={contentContainerStyle}>
                    <div style={textContentStyle}>
                        <h2 style={sectionHeadingStyle}>Why Choose Us?</h2>
                        <p style={sectionDescriptionStyle}>
                            Explore our comprehensive insurance services tailored to meet your unique needs.
                        </p>
                        <ul style={listStyle}>
                            <li>Customized Coverage Plans</li>
                            <li>Competitive Premiums</li>
                            <li>24/7 Customer Support</li>
                        </ul>
                    </div>
                    <div style={imageContainerStyle}>
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Image 1 (Placeholder)"
                            style={imageStyle}
                        />
                    </div>
                </div>
                <div style={contentContainerStyle}>
                    <div style={textContentStyle}>
                        <h2 style={sectionHeadingStyle}>Our Clients Are Happy</h2>
                        <p style={sectionDescriptionStyle}>
                            Nothing gives us greater pride than seeing our clients delighted with the work we’ve done together.
                            Our case studies are solid proof of all the different ways we’ve transformed the way people collaborate, work, and succeed.
                        </p>
                    </div>
                    <div style={imageContainerStyle}>
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Image 2 (Placeholder)"
                            style={imageStyle}
                        />
                    </div>
                </div>
                <div style={contentContainerStyle}>
                    <div style={textContentStyle}>
                        <h2 style={sectionHeadingStyle}>We Make It Personal</h2>
                        <p style={sectionDescriptionStyle}>
                            When you work with us, you can count on personalized, one-on-one service every step of the way.
                            We earn your trust by being responsive, intuitive, and honest. We earn your respect by delivering on time and on budget.
                            We built our reputation on exceptional customer service. Discover the difference it makes.
                        </p>
                    </div>
                    <div style={imageContainerStyle}>
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Image 3 (Placeholder)"
                            style={imageStyle}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Styles for the extended section
const sectionStyle = {
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    padding: '80px 20px',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
};

const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap', // Add flexWrap to allow content to wrap on smaller screens
};

const textContentStyle = {
    flex: '1',
    textAlign: 'left',
    margin: '0 20px',
};

const imageContainerStyle = {
    width: '400px',
    height: 'auto',
    marginBottom: '20px',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const sectionHeadingStyle = {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '15px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
};

const sectionDescriptionStyle = {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.5',
};

const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
};

export default WhyChooseUsAndHappyClients;
