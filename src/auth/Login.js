import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

export default function Login() {


    const { loginWithRedirect } = useAuth0();

  return (
    <div>
        <div>
            <h3>Login</h3>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    </div>
  )
}
