import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";


function SignIn() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    function handleFormSubmit(data) {
        console.log(data)
    }

    const {logIn} = useContext(AuthContext)

  return (
    <>
      <h1>Inloggen</h1>

        <form className='login-container' onSubmit={handleSubmit(handleFormSubmit)}>
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
                required: {
                    value: true,
                    message: 'vul je wachtwoord in'
                }
            })} />
           {errors.password && <p className='login-error-message'>{errors.password.message}</p>}
            <button className='login-btn' type='submit' onClick={logIn}>Login</button>

        </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;