import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({ history }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button
        onClick={() => {
          history.push('/')
        }}>
        Go Back
      </button>
    </div>
  )
}

export default Login
