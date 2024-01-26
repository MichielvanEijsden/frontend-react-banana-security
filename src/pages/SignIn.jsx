import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [error,setError]=useState()
    const {logIn} = useContext(AuthContext)


    async function handleFormSubmit(data) {
       try {
           const response = await axios.post('http://localhost:3000/login', {
                    ...data
               }
           )
           logIn(response.data.accessToken)
       }catch (e) {
           console.error('de error:',e)
           setError(e.message)
       }
    }



  return (
    <>
      <h1>Inloggen</h1>
        {error}
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>Username(email):</label>
            <input type='text' {...register('email', {
                required: {
                    value: true,
                    message: 'vul je wachtwoord in',
                },
                validate :(value)=> value.includes('@') ||'Email moet een @ bevatten',
            })} />
            {errors.email && <p className='login-error-message'>{errors.email.message}</p>}

            <label>Password:</label>
            <input type='password' {...register('password', {
                required: {
                    value: true,
                    message: 'vul je wachtwoord in'
                }
            })} />
           {errors.password && <p className='login-error-message'>{errors.password.message}</p>}
            <button className='login-btn' type='submit'>Login</button>

        </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;