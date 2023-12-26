import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const Services = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4" style={{ color: 'green', borderBottom: '2px solid green', fontFamily: 'Arial, sans-serif'}}>Our Services</h1>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <Link to="/Contact" className="service-link">
            <div className="service-card text-center">
              <img
                src="https://ensurepolicy.com/public/frontend/img/icon/Icon_3.png"
                alt="Life Insurance"
                className="img-fluid mb-3"
              />
              <h4>Life Insurance</h4>
              <p>Protect your loved ones with our comprehensive life insurance plans.</p>
            </div>
          </Link>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Link to="/Contact" className="service-link">
            <div className="service-card text-center">
              <img
                src="https://ensurepolicy.com/public/frontend/img/icon/Icon_2.png"
                alt="Health Insurance"
                className="img-fluid mb-3"
              />
              <h4>Health Insurance</h4>
              <p>Ensure the well-being of your family with our affordable health insurance options.</p>
            </div>
          </Link>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Link to="/Contact" className="service-link">
            <div className="service-card text-center">
              <img
                src="https://ensurepolicy.com/public/frontend/img/icon/Icon_1.png"
                alt="Moter Insurance"
                className="img-fluid mb-3"
              />
              <h4>Property Insurance</h4>
              <p>Secure your home and assets with our reliable property insurance coverage.</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
