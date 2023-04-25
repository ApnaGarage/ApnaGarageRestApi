import React from 'react'
import styled from 'styled-components';
import { Button } from '../Style/Button';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody ,
  CardTit1e,
  CardSubtit1e,
  CardText,
  CardFooter,
  Container,
  } from "reactstrap"
  

const Pricing = () => {
  return (
    <div className='container'>
      <header>
        <div className='text-center w-75 my-4 mx-auto'>
          <h2><b>PRICING</b></h2>
          <p className='fs-5 text-muted'>At ApnaGarage we have devised a dedicated and systematically structured process which aims for a hassle free and effortless customer experience. We constantly pursue to create cost-efficient and effective vehicle maintenance solution at your fingertips.</p>
        </div>
      </header>

      <main>
        <div className='row row-cols-3 row-cols-md-2'>
          {/* ROUTINE SERVICE*/}
          <div className='col'>
            <div className='card text-center'>
              <div className='card-header'style={{ backgroundColor: 'orange'}}>
                <h4 className='fw-normal'>Routine Service</h4>
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Routine Service (Charges include charges for Pick n' drop at Doorstep And Charges are excluding engine oil)
                </h4>
                <h5><ul className='list-unstyled py-3'>
                  <li><b>*</b> Moped 100cc-125cc : Service: Rs 399</li>
                  <li><b>*</b> Bike 100cc-125cc : Service: Rs 299</li>
                  <li><b>*</b> Bike 135cc-180cc : Service: Rs 399</li>
                  <li><b>*</b> Bike 180cc-220cc : Service: Rs 499</li>
                  <li><b>*</b> Bike 250cc-400cc : Service: Rs 649</li>
                  <li><b>*</b> RE 350cc-500cc : Service: Rs 699</li>
                  
              
                </ul></h5>
                <hr/>
                <div className='card-body'>
                  <h4 className='card-title'><b><u>Routine Service Includes :-</u></b></h4>
                  <h5><ul className='list-unstyled py-3'>
                  <li><b>*</b> ALL TYPE OF FILTER CLEAN</li>
                  <li><b>*</b> WASHING</li>
                  <li><b>*</b> All TYPE OF OILS ARE REPLACE/CHECK</li>
                  <li><b>*</b> GREASING/OILING</li>
                  <li><b>*</b> MINER FITTING/NUT-BOLTS REPLACEMNET</li>
                  <li><b>*</b> ALL LIGHTS CHECK</li>
                  <li><b>*</b> CHAIN ADJUSTMENT SETTING</li>
                  <li><b>*</b> FRONT & REAR DISC PAD CLEANING & SETTING</li>
                  <li><b>*</b> ACCELERATOR CABLE INSPECT/SETTING</li>
                  <li><b>*</b> CLUTH & BREAK CABLE INSPECT/SETTING</li>
                  <li><b>*</b> CARBURETTOR INSPECT/SETTING</li>
                </ul></h5>
                </div>


              </div>
            </div>
             
          </div>

{/* BREAKDOWN ASSISTANCE*/}
          <div className='col'>
            <div className='card text-center'>
              <div className='card-header'style={{ backgroundColor: 'orange'}}>
                <h4 className='fw-normal'>Breakdown Assistance Bike</h4>
              </div>
              <div className='card-body'>
                <h4 className='card-title'>Emergency Breakdown: Charges Depend On The Severity Of The Issue.
                </h4>
                <h5><ul className='list-unstyled py-3'>
                 <li><b>*</b> Minor Issue: (Emergency Visiting Charges Rs 199) + (Charges for problem solving)</li>
                 <li><b>*</b> E.G : Minor Issue: Clutch Cable breakdown – Charges will be (Visiting Charges Rs 199 + Clutch Cable RP + Clutch Cable replacement labour)</li>
                  
              
                </ul></h5>
                <hr/>
                <div className='card-body'>
                  <h4 className='card-title'><b><u>Minor Issue Type :-</u></b></h4>
                  <h5><ul className='list-unstyled py-3'>
                 <li><b>*</b> Spare Wear & Tear:(Visiting Charges Rs 199 + Spare MRP + Spare replacement labour)</li>
                 <li><b>*</b> Flat Tyre:(Visiting Charges Rs 199 + Tyre replacement labour + Cost for puncture removal)
                 </li>
                 <li><b>*</b> Issue Unknown: Rs 199, If any issue is not able to get identified on the spot the mechanic will pickup the bike to the workshop, in this case pickup charges will be applicable</li>
                </ul></h5>
                </div>
                <hr/>
                 <div className='card-body'>
                  <h4 className='card-title'><b><u>Major Issue Type :- Only Transportation Charges:-</u></b></h4>
                  <h5><ul className='list-unstyled py-3'>
                 <li><b>*</b> Emergency Accidental Breakdown: Rs 1000 – Rs 4000 ( Depending on the condition of bike and time of service)</li>
                 <li><b>*</b> Scheduled Breakdown: Rs 500 – Rs 1500
                </li>
                </ul></h5>
                </div>
              </div>
            </div> 
          </div>
        </div>

      </main>
      <div className='text-center w-75 my-4 mx-auto'>
      <Button className="btn hireme-btn">
    <NavLink to="/booknow">PickUp & Service</NavLink>
   </Button>
   <Button className="btn hireme-btn">
    <NavLink to="/rsa">Book RSA</NavLink>
   </Button>
   </div>
    </div>
  )
}

export default Pricing