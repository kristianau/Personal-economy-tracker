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
        <section className='flex flex-col gap-12 items-center justify-center h-screen'>

            <h1 className='text-4xl text-center tracking-wider underline'>Economy tracker</h1>

            <div className='flex flex-col gap-7 px-14 py-14 shadow-blue-950 shadow-sm'>

                <form className='flex flex-col gap-8'>
                    <legend className='text-xl text-center font-medium tracking-wider'>{isSignUpActive ? "Sign Up" : "Sign In"}</legend>
                    <fieldset className='flex flex-col gap-6 items-center'>

                        <div className='flex flex-col gap-5 items-end'>
                            <div className='flex flex-row gap-4 items-center'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' placeholder='email@email.com' onChange={handleEmailChange} className='border border-solid p-1 rounded'></input>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' placeholder='password' onChange={handlePasswordChange} className='border border-solid p-1 rounded'></input>
                            </div>
                        </div>

                        {isSignUpActive ?
                            <button type='button' onClick={handleSignUp} className='bg-yellow-400 hover:bg-yellow-500 rounded w-1/2'>NEW USER</button>
                            :
                            <button type='button' onClick={handleSignIn} className='bg-blue-500 text-white hover:bg-blue-600 rounded w-1/2'>SIGN IN</button>
                        }

                    </fieldset>
                    <button type='button' onClick={handleMethodChange} className='underline text-blue-500 hover:text-blue-700'>{isSignUpActive ? "Login" : "Create an account"}</button>
                </form>
            </div>
        </section>
    )
}
