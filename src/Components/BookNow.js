import React from 'react'
import { CardHeader, Container,Card, CardBody,Form,Label, Input, FormGroup,Button,Row,Col } from 'reactstrap'

const BookNow = () => {
  return (
  <Container>
  
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
        <Form>

            {/* Name Field */}
            <FormGroup >
            <Label for="name">Enter Name</Label>
            <Input
             type='text'
              placeholder='Enter here'
                />
            </FormGroup>


             {/* Address Field */}
            <FormGroup >
            <Label for="street">Enter Street</Label>
            <Input
             type='text'
              placeholder='Enter here'
                />
            </FormGroup>

            <FormGroup>
            <Label for="city">Enter City</Label>
             <Input
             type='text'
              placeholder='Enter here'
                />
            </FormGroup>

            <FormGroup>
            <Label for="state">Enter State</Label>
             <Input
             type='text'
              placeholder='Enter here'
                />
            </FormGroup>

            <FormGroup>
            <Label for="zip">Enter Zip</Label>
             <Input
             type='number'
              placeholder='Enter here'
                />
            </FormGroup>


             {/* BikeCompany Field */}
            <FormGroup>
            <Label for="bikeCompany">Enter Bike Company</Label>
             <Input
             type='text'
              placeholder='Enter here'
                />
            </FormGroup>


          {/* BikeCompany Model */}
            <FormGroup>
            <Label for="bikeModel">Enter Bike Model</Label>
             <Input
             type='text'
              placeholder='Enter here'
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