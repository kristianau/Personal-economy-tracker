import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

export const Authentication = ({ user }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Ui component conditional rendering:
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };
    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

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
                                <input type='email' id='email' placeholder='email@email.com' onChange={(e) => setEmail(e.target.value)} className='border border-solid p-1 rounded'></input>
                            </div>
                            <div className='flex flex-row gap-4 items-center'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} className='border border-solid p-1 rounded'></input>
                            </div>
                        </div>

                        {isSignUpActive ?
                            <button type='button' onClick={signUp} className='bg-yellow-400 hover:bg-yellow-500 rounded w-1/2'>NEW USER</button>
                            : (

                                <button type='button' onClick={signIn} className='bg-blue-500 text-white hover:bg-blue-600 rounded w-1/2'>SIGN IN</button>

                            )
                        }

                    </fieldset>
                    <button type='button' onClick={() => setIsSignUpActive(!isSignUpActive)} className='underline text-blue-500 hover:text-blue-700'>{isSignUpActive ? "Login" : "Create an account"}</button>
                </form>
            </div>
        </section>
    )
}
