import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const Contact = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        insuranceType: 'auto',
        age: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add logic to handle form submission here, e.g., send data to API using Axios
            const response = await axios.post('https://655500aa63cafc694fe75243.mockapi.io/course', formData);

            // Log the API response
            console.log('API Response:', response.data);

            // Set submit success to true
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <>
            <div style={{ backgroundColor: '#3498db', padding: '20px' ,marginTop:'5px'}}>
                <Header />
            </div>
            <div style={containerStyle}>
                {/* Right Side - Insurance Data Form */}
                <div style={{ ...rightCardStyle, ...largerScreenStyles.rightCardStyle }}>
                    <h1 style={headerStyle}>Contact Us</h1>
                    <p>Reach out to us for personalized insurance assistance.</p>

                    {/* Insurance Data Form */}
                    <form onSubmit={handleSubmit} style={formStyle}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="contactNumber">Contact Number:</label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="age">Age:</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="insuranceType">Insurance Type:</label>
                            <select
                                id="insuranceType"
                                name="insuranceType"
                                value={formData.insuranceType}
                                onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                                required
                                style={inputStyle}
                            >
                                <option value="auto">Auto Insurance</option>
                                <option value="home">Home Insurance</option>
                                <option value="life">Life Insurance</option>
                                <option value="health">Health Insurance</option>
                                <option value="travel">Travel Insurance</option>
                            </select>
                        </div>

                        {submitSuccess ? (
                            <p style={{ color: 'green' }}>Your request has been submitted successfully.</p>
                        ) : (
                            <button type="submit" style={submitButtonStyle}>
                                Submit
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
};

const rightCardStyle = {
    flex: 1,
    padding: '20px',
    backgroundColor: '#ecf0f1',
    borderRadius: '8px',
    marginBottom: '10px',
};

const headerStyle = {
    color: 'green',
    borderBottom: '2px solid green',
    fontFamily: 'Arial, sans-serif',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #bdc3c7',
    boxSizing: 'border-box',
    marginBottom: '10px',
};

const submitButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
};

// Media query for larger screens (e.g., laptops)
const largerScreenStyles = {
    '@media (min-width: 768px)': {
        rightCardStyle: {
            width: '60%', // Adjust the width as needed
            margin: 'auto', // Center the card on larger screens
        },
    },
};


export default Contact;
