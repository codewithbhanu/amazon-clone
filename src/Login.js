import React, { useState } from 'react'
import './Login.css'
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const signIn = e  => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e  => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
        .catch(error => alert(error.message))
    }
  
    return (
        <div className='login'>
            <Link to = '/'>
            <img className='login__logo' src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png' />
            </Link>
            <div className='login__container' >
                <h1 >Sign-in</h1>
                <form >
                    <h5 >E-Mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5 >Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </form>
                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                <p >
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.

                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
        
    )
}

export default Login
