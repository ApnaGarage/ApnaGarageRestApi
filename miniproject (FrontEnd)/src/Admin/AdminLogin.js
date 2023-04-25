import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container,Row,Col,Card,CardHeader, CardBody,Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { adminService } from '../Services/adminlogin-service'

const AdminLogin = () => {

  const [admin,setAdmin]=useState({

    email:'',
    password:'',
  })

  const [error,setError]=useState({
    errors:{},
    isError:false
})

// handleChange
const handleChange=(event,property)=>{

  //Dynamic setting the values
  setAdmin({...admin,[property]:event.target.value})
 
}


   //reseting the form
   const resetAdmin=()=>{
    setAdmin({
      email:'',
      password:'',
    })
  }




//Submitting the form
//prevent default is used to avoid default behaviour of form

const submitAdmin=(event)=>{
  event.preventDefault()

  console.log(admin);
  //data validation

  
  //call server api for sending data
  adminService(admin).then((response)=>{
    console.log(response)
    console.log("Booked Successfully")
  }).catch((error)=>{
    console.log(error)
    console.log("Error log")
  })
  ;
}



  return (
    <Container>
    <Row className='mt-4'>
      <Col sm={{size:4,offset:4}}>
        <Card>
          <CardHeader>
            <h3 className='text-center'>Admin Login Here !!</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={submitAdmin}>
             {/* Email Field */}
             <FormGroup>
              <Label for='email'>
                Enter Email
              </Label>
              <Input type='text' 
              id='email'
              required
              onChange={(e)=>handleChange(e,'email')}
              value={admin.email}
              >
          
              </Input>
             </FormGroup>

              {/* Password Field */}
              <FormGroup>
              <Label for='password'>
                Enter Password
              </Label>
              <Input type='password' 
              id='password'
              required
              onChange={(e)=>handleChange(e,'password')}
              value={admin.password}
              >
              </Input>
             </FormGroup>

             <Container className='text-center'>
              <Button outline color='warning'><NavLink to={"/admindashboard"}>Login</NavLink></Button>
              <Button className='ms-2' outline color='secondary' onClick={resetAdmin}>Reset</Button>
         
             </Container>
            </Form>
          </CardBody>
        </Card>


      </Col>
    </Row>
  </Container>
  )
}

export default AdminLogin
