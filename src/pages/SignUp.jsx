import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";

function SignUp() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {error,setError} = useState()

    function handleFormSubmit(data) {
        console.log(data)
    }


  return (
    <>
      <h1>Registreren</h1>


        <form className='login-container' onSubmit={handleSubmit(handleFormSubmit)}>

            {error}
            <label>Username:</label>
            <input type='text' {...register('username', {
                required: {
                    value: true,
                    message: 'vul je username in'
                }
            })}/>
            {errors.username && <p className='login-error-message'>{errors.username.message}</p>}
            <label>Password:</label>
            <input type='password' {...register('password', {
                minLength:{value: 6,message: 'wachtwoord moet minimaal 6 characters lang zijn'},
                required: {
                    value: true,
                    message: 'vul je wachtwoord in'
                }
            })} />
            {errors.password && <p className='login-error-message'>{errors.password.message}</p>}
            <label>Email:</label>
            <input type='text' {...register('email', {
                required: {
                    value: true,
                    message: 'vul je wachtwoord in',
                },
                validate :(value)=> value.includes('@') ||'Email moet een @ bevatten',
            })} />
            {errors.email && <p className='login-error-message'>{errors.email.message}</p>}

            <button className='login-btn' type='submit'>Registreer</button>
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;