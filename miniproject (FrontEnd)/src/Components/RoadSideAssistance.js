import React, { useEffect, useState } from 'react'
import { CardHeader, Container,Card, CardBody,Form,Label, Input, FormGroup,Button,Row,Col } from 'reactstrap'
import {rsaService} from "../Services/rsa-service"
import {toast} from 'react-toastify'



const RoadSideAssistance = () => {

  
  const [rsa,setRsa]=useState({

      name:'',
      chassisno:'',
      location:'',
      mobileno:'',
  })

  const [error,setError]=useState({
    errors:{},
    isError:false
})


  // handleChange
  const handleChange=(event,property)=>{

    //Dynamic setting the values
    setRsa({...rsa,[property]:event.target.value})
   
  }


   //reseting the form
   const resetRsa=()=>{
    setRsa({
      name:'',
      chassisno:'',
      location:'',
      mobileno:'',
    })
  }


  
  //Submitting the form
//prevent default is used to avoid default behaviour of form

const submitRsa=(event)=>{
  event.preventDefault()

  console.log(rsa);

  //data validation


  //call server api for sending data
  rsaService(rsa).then((response)=>{
    console.log(response)
    toast.success("N Sucessfully!!!")
  }).catch((error)=>{
    console.log(error)
    toast.success("Registered Sucessfully!!!")
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
       <h3>Fill Information for RoadSideAssistance</h3> 
       
    </CardHeader>

    <CardBody>
        {/* Creating Form */}
        <Form onSubmit={submitRsa}>

            {/* Name Field */}
            <FormGroup >
            <Label for="name">Enter Name</Label>
            <Input
             type='text'
              placeholder='Enter here'
              id='name'
              onChange={(e)=>handleChange(e,'name')}
              value={rsa.name}
                />
            </FormGroup>


             {/* Address Field */}
            <FormGroup >
            <Label for="chassino">Enter Chassis Number</Label>
            <Input
             type='text'
              placeholder='Enter here'
              id='chassisno'
              onChange={(e)=>handleChange(e,'chassisno')}
              value={rsa.chassisno}
                />
            </FormGroup>

            <FormGroup>
            <Label for="loaction">Enter Location</Label>
             <Input
             type='text'
              placeholder='Enter here'
              id='location'
              onChange={(e)=>handleChange(e,'location')}
              value={rsa.location}
                />
            </FormGroup>

            <FormGroup>
            <Label for="mobileno">Enter Mobile Number</Label>
             <Input
             type='number'
              placeholder='Enter here'
              id='mobileno'
              onChange={(e)=>handleChange(e,'mobileno')}
              value={rsa.mobileno}
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

export default RoadSideAssistance
