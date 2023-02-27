import React from 'react'
import { Container,Row,Col,Card,CardHeader, CardBody,Form, FormGroup, Label, Input, Button } from 'reactstrap'

const Login = () => {
  return (
  <Container>
    <Row className='mt-4'>
      <Col sm={{size:4,offset:4}}>
        <Card>
          <CardHeader>
            <h3 className='text-center'>Login Here !!</h3>
          </CardHeader>
          <CardBody>
            <Form>
             {/* Email Field */}
             <FormGroup>
              <Label for='email'>
                Enter Email
              </Label>
              <Input type='text' id='email'>
          
              </Input>
             </FormGroup>

              {/* Password Field */}
              <FormGroup>
              <Label for='password'>
                Enter Password
              </Label>
              <Input type='password' id='password'>
              </Input>
             </FormGroup>

             <Container className='text-center'>
              <Button outline color='warning'>Login</Button>
              <Button className='ms-2' outline color='secondary'>Reset</Button>
         
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
