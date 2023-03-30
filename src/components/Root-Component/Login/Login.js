import React from 'react'
import './Login.css'

const Login = () => {

const login = [
    {
        email:'Cubagoa346@gmail.com',
        password:'4545Cuba2000**'
    }
]

    // localStorage.setItem('user-info', JSON.stringify(result))
  
  return (
    <section className='log-in' >

        <form>
            <input type='email' />
            <input type='password' />
        </form>
      
    </section>
  )
}

export default Login
