import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Style/Button';
import Service from './Service';

const AboutUs = () => {
  return (

    <Wrapper>
  <div className="container grid grid-two-column">
    <div className='section-hero-data'>
      <h1 className='hero-heading'>ABOUT APNAGARAGE</h1>
      <p className='hero-para'>At Apna Garage, we share your passion for riding and take great pride in keeping you riding all round the year. Our aim is to offer unmatched service at unbeatable prices. That too, right at your doorstep! We understand there’s nothing worse than having to plan your entire day around getting your vehicle serviced. Leave it to us to simply turn up and get the job done. From your ghar to the garage and back with no additional cost, our technicians are leaving there trail across the city! Surrounded by the engines, stacks of tyres, countless spark plugs and slick engine oil - we work on all kinds of bikes, right from 50 cc scooters to top of the range sports motorcycles. We try to put all our passion, knowledge, experience and dedication into everything we do here at Apna Garage.      
      </p>

      <h1 className='hero-heading'>MISSION</h1>
      <p className='hero-para'>“To revolutionise the fragmented industry of the automobile servicing by bringing one stop solution driven by ultimate customer satisfaction”</p>
      <div className='section-hero-image'>
      <picture>
        <img src='./Images/Bike.png' alt='' srcSet='' />
      </picture>
    </div>
    <div className='about-padding'>
    <Button className="btn hireme-btn">
    <NavLink to="/service">Check Service</NavLink>
   </Button>
   {/* <Button className="btn hireme-btn">
    <NavLink to="/bookNow">Book Now </NavLink>
   </Button> */}
   </div>
  </div>
  
    </div>
  
   
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 8rem 5rem;
  .about-padding{
    display: flex;
    gap: 90.0rem;
    
  }
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 25rem;
    padding: 2rem 1rem;
  }
 
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    
    text-transform: uppercase;
      display: flex;
    justify-content: left;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.bg};
  }
  .hero-para {
    display: flex;
    justify-content:center;
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 120rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:45%;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 30%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default AboutUs
