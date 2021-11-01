import React from 'react'
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  RegLink,
  Text,
  Wrap,
  Wrapp,
} from './LoginPageElement'

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>WELCOME BACK..</Title>
        <Form>
          <Input type='text' placeholder='Username...' required />
          <Input type='password' placeholder='Password...' required />
          <Wrap>
            <Button>Log In</Button>
            <RegLink>Forgot your Password?</RegLink>
            <hr />
            <Wrapp>
              <Text>Don't have an account yet?</Text>
              <RegLink>Sign Up</RegLink>
            </Wrapp>
          </Wrap>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default LoginPage
