import React from 'react'
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from './RegisterPageElement'

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign Up to STUTERN..</Title>
        <Form>
          <Input type='text' placeholder='Your first name...' required />
          <Input type='text' placeholder='Your middle name...' required />
          <Input type='text' placeholder='Your last name...' required />
          <Input type='text' placeholder='Username...' required />
          <Input type='email' placeholder='Email...' required />
          <Input type='number' placeholder='Phone Number...' required />
          <Input type='password' placeholder='Password...' required />
          <Input type='passwrod' placeholder='Confirm Pasword...' required />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default RegisterPage
