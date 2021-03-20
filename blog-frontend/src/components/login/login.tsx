import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({ history }) => {
  return (
    <div>
      <Container>
        <Heading as="h2" size="2xl">
          Login Page
        </Heading>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue">Login</Button>

        <button
          onClick={() => {
            history.push('/')
          }}>
          Go Back
        </button>
      </Container>
    </div>
  )
}

export default Login
