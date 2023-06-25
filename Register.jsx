import React from 'react'
import './Register.css'

const Register = () => {
    return (
        <div className='container'>
            <div className="div0">
                <div className="div1">
                    Login
                </div>
                <form action="">
                    <div className="div2">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <input type="email" name='email' id='email' placeholder='Enter email' required />
                    <div className="div3">
                        <label htmlFor="password">Password:</label>
                    </div>
                    <input type="password" name='password' id='password' placeholder='Enter password' required />
                    <div className="div4">
                        <input type="checkbox" onClick="myFunction()" id='myInput' />Show Password
                    </div>
                    <div>
                        <button className='button'>SIGN UP</button>
                    </div>
                    <div className="div5">
                        Forgot <a href=''>Username / Password</a>  ?
                    </div>
                    <div className="div6">
                        Don't have an account ?<a href=''>Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register