import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardHeader, Container, FormGroup, Label,Form, Input, Button, Row ,Col} from 'reactstrap'
import {userService} from '../Services/user-service'
import {toast} from 'react-toastify'



const SignUp = () => {

   

    const [data,setData]=useState({

      name:'',
      email:'',
      password:'',
      about:'',
    })


    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    // useEffect(()=>{
    //     console.log(data);
    // },[data])
    

    // handleChange
  const handleChange=(event,property)=>{

    //Dynamic setting the values
    setData({...data,[property]:event.target.value})
   
  }


  //reseting the form
  const resetData=()=>{
    setData({
        name:'',
        email:'',
        password:'',
        about:'',
    })
  }


  //Submitting the form
//prevent default is used to avoid default behaviour of form

  const submitForm=(event)=>{
    event.preventDefault()

    console.log(data)

    //data validation


    //call server api for sending data
    userService(data).then((reponse)=>{
      console.log(reponse)
      toast.success("Registered Sucessfully!!!")
    }).catch((error)=>{
      console.log(error)
      toast.success("Error!!!")
    })
    ;
  }

  return (
<Container>
   <Row className='mt-4'>

    {/* {JSON.stringify(data)} */}
    <Col sm={{size:5,offset:4}}>
    <Card color='secondary' inverse>
        <CardHeader>
           <h3 className='text-center' color='black'> Fill Information to Register !!</h3>
        </CardHeader>
        <CardBody>
            {/* creating a form */}
            <Form onSubmit={submitForm}>
                {/* Name field */}
                <FormGroup>
                    <Label for='name'>Enter name</Label>
                    <Input 
                    type='text' 
                    placeholder='Enter here' 
                    id='name'
                    required
                    onChange={(e)=>handleChange(e,'name')}
                    value={data.name}
                    >

                    </Input>
                </FormGroup>

                {/* Email field */}
                <FormGroup>
                    <Label for='email'>Enter email</Label>
                    <Input type='email'
                     placeholder='Enter here'
                      id='email'
                      required
                      onChange={(e)=>handleChange(e,'email')}
                      value={data.email}
                      >

                      </Input>
                </FormGroup>

                {/* Password field */}
                <FormGroup>
                    <Label for='password'>Enter password</Label>
                    <Input type='password'
                     placeholder='Enter here' 
                     id='password'
                     required
                     onChange={(e)=>handleChange(e,'password')}
                     value={data.password}
                     ></Input>
                </FormGroup>

                 {/* About field */}
                 <FormGroup>
                    <Label for='about'>Enter</Label>
                    <Input type='textarea' 
                    placeholder='Enter here' 
                    id='about'
                    required
                    onChange={(e)=>handleChange(e,'about')}
                    value={data.about}
                    style={{height:'200px'}}></Input>
                </FormGroup>

                <Container className='text-center'>
                    <Button  outline color='warning'>
                        Register
                    </Button>
                    <Button onClick={resetData} outline color='secondary' type='reset' className='ms-2'>
                        Reset
                    </Button>
                </Container>
            </Form>
            <p className='text-center'>Already Have an Account?<span><NavLink to='/login'>LogIn</NavLink></span></p>
        </CardBody>
    </Card>
    </Col>
   </Row>
   
</Container>
  )
}

export default SignUp
