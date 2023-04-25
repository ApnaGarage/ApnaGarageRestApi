import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card,CardHeader, CardBody,Form, FormGroup, Label, Input, Button } from 'reactstrap'
import {clientService} from '../Services/clientLogin-service'
import {toast} from 'react-toastify'
import { NavLink } from 'react-router-dom'
const Login = () => {
  
  const [client,setClient]=useState({

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
  setClient({...client,[property]:event.target.value})
 
}


   //reseting the form
   const resetClient=()=>{
    setClient({
      email:'',
      password:'',
    })
  }




//Submitting the form
//prevent default is used to avoid default behaviour of form

const submitClient=(event)=>{
  event.preventDefault()

  console.log(client);
  //data validation

  
  //call server api for sending data
  clientService(client).then((response)=>{
    console.log(response)
    toast.success("User Loged In Sucessfully")
  }).catch((error)=>{
    console.log(error)
    toast.error("Permission Denied")

  })
  ;
}

  return (
  <Container>
    <Row className='mt-4'>
      <Col sm={{size:4,offset:4}}>
        <Card>
          <CardHeader>
            <h3 className='text-center'>Login Here !!</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={submitClient}>
             {/* Email Field */}
             <FormGroup>
              <Label for='email'>
                Enter Email
              </Label>
              <Input type='text'
               id='email'
               required
               onChange={(e)=>handleChange(e,'email')}
               value={client.email}
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
              value={client.password}>
              </Input>
             </FormGroup>

             <Container className='text-center'>
              <Button outline color='warning'>
                <NavLink to={"/price"}>Login</NavLink>
                
                </Button>
              <Button className='ms-2' outline color='secondary' onClick={resetClient}>Reset</Button>
         
             </Container>
            </Form>
          </CardBody>
        </Card>


      </Col>
    </Row>
  </Container>
  )
}

export default Login
