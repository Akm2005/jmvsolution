// Partners.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Partners.css';

const partnerLogos = [
  'https://ensurepolicy.com/public/frontend/images/logo/tata-aia-life-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/star-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/reliance-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/max-bupa-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/LIC-Logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/icici-lombard.png',
  'https://ensurepolicy.com/public/frontend/images/logo/icici-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/hdfc-life.png',
  'https://ensurepolicy.com/public/frontend/images/logo/hdfc-egro-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/digit-logo.png',
  'https://ensurepolicy.com/public/frontend/images/logo/bajaj-logo.png', // New logo added
  // Add more partner logos as needed
];

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // Transition speed between slides
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Change the speed to your desired value (in milliseconds)
  };

  return (
    <section className="_about_clients_main">
      <Container className="mywidthfix wow fadeInDown delay-04s">
        <h3 className="_common_heading">Our Partners</h3>

        <div className="_about_clients_wrapper wow fadeInDown slick-initialized slick-slider">
          <Slider {...settings}>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="item">
                <img src={logo} alt={`Partner Logo ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
