import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

export const Authentication = ({ user }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive)
    }

    const handleSignUp = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }

    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    if (user) {
        return <Navigate to="/"></Navigate>
    }

    return (
        <section>
            <h1>Economy tracker</h1>
            <form>
                <legend>{isSignUpActive ? "Sign Up" : "Sign In"}</legend>
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='email' placeholder='email' onChange={handleEmailChange} className='border border-solid'></input>
                        </li>
                        <li>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' placeholder='password' onChange={handlePasswordChange} className='border border-solid'></input>
                        </li>
                    </ul>

                    {isSignUpActive ?
                        <button type='button' onClick={handleSignUp} className='bg-blue-500 text-white'>Sign Up</button>
                        :
                        <button type='button' onClick={handleSignIn} className='bg-blue-500 text-white'>Sign In</button>
                    }

                </fieldset>
                <button type='button' onClick={handleMethodChange}>{isSignUpActive ? "Login" : "Create an account"}</button>
            </form>
        </section>
    )
}
