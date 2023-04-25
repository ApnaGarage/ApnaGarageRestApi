import React, { useEffect, useState } from 'react'
import { CardHeader, Container,Card, CardBody,Form,Label, Input, FormGroup,Button,Row,Col } from 'reactstrap'
import {locationService} from '../Services/location-service'
import {toast} from 'react-toastify'



const BookNow = () => {


  const [locate,setLocate]=useState({

    name:'',
    street:'',
    city:'',
    state:'',
    zip:'',
    bikeCompany:'',
    bikeModel:'',
  })

  const [error,setError]=useState({
    errors:{},
    isError:false
})


  // handleChange
  const handleChange=(event,property)=>{

    //Dynamic setting the values
    setLocate({...locate,[property]:event.target.value})
   
  }


   //reseting the form
   const resetLocate=()=>{
    setLocate({
      name:'',
      street:'',
      city:'',
      state:'',
      zip:'',
      bikeCompany:'',
      bikeModel:'',
    })
  }


  
  //Submitting the form
//prevent default is used to avoid default behaviour of form

const submitLocation=(event)=>{
  event.preventDefault()

  console.log(locate);
  //data validation


  //call server api for sending data
  locationService(locate).then((response)=>{
    console.log(response)
    toast.success("Booking Sucessfully!!!")
  }).catch((error)=>{
    console.log(error)
    toast.error("Please Try Again!!!")
  })
  ;
}



  return (
  <Container>
  {/* {JSON.stringify(data)} */}
  <Row className='mt-4'>
    <Col
    //   className="bg-light border"
    //   sm="4"
    //   xs="6"

      sm={{size:5,offset:4}}>
    <Card color='dark' outline>
    <CardHeader>
       <h3>Fill Information for Booking</h3> 
       
    </CardHeader>

    <CardBody>
        {/* Creating Form */}
        <Form onSubmit={submitLocation}>

            {/* Name Field */}
            <FormGroup >
            <Label for="name">Enter Name</Label>
            <Input
             type='text'
              placeholder='Enter here'
              id='name'
              required
              onChange={(e)=>handleChange(e,'name')}
              value={locate.name}
                />
            </FormGroup>


             {/* Address Field */}
            <FormGroup >
            <Label for="street">Enter Street</Label>
            <Input
             type='text'
              placeholder='Enter here'
              id='street'
              required
              onChange={(e)=>handleChange(e,'street')}
              value={locate.street}
                />
            </FormGroup>

            <FormGroup>
            <Label for="city">Enter City</Label>
             <Input
             type='text'
              placeholder='Enter here'
              id='city'
              required
              onChange={(e)=>handleChange(e,'city')}
              value={locate.city}
                />
            </FormGroup>

            <FormGroup>
            <Label for="state">Enter State</Label>
             <Input
             type='text'
              placeholder='Enter here'
              id='state'
              required
              onChange={(e)=>handleChange(e,'state')}
              value={locate.state}
                />
            </FormGroup>

            <FormGroup>
            <Label for="zip">Enter Zip</Label>
             <Input
             type='number'
              placeholder='Enter here'
              id='zip'
              required
              onChange={(e)=>handleChange(e,'zip')}
              value={locate.zip}
                />
            </FormGroup>


             {/* BikeCompany Field */}
            <FormGroup>
            <Label for="bikeCompany">Enter Bike Company</Label>
             <Input
             type='text'
              placeholder='Enter here'
              id='bikeCompany'
              required
              onChange={(e)=>handleChange(e,'bikeCompany')}
              value={locate.bikeCompany}
                />
            </FormGroup>


          {/* BikeCompany Model */}
            <FormGroup>
            <Label for="bikeModel">Enter Bike Model</Label>
             <Input
             type='text'
              placeholder='Enter here'
              id='bikeModel'
              required
              onChange={(e)=>handleChange(e,'bikeModel')}
              value={locate.bikeModel}
                />
            </FormGroup>  


             <Container className='text-center'>
                <Button color="dark">Book Now</Button>
                <Button color="secondary" className='ms-2'>Reset</Button>

             </Container>


        </Form>
    </CardBody>
 </Card>

    </Col>
   </Row>
  </Container>
  )
}

export default BookNow