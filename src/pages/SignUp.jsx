import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import axios from "axios";

function SignUp() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const [error,setError] = useState()
    const navigate = useNavigate()
    const baseUrl = 'http://localhost:3000'



    async function handleFormSubmit(data) {
        try {
            const response = await axios.post(baseUrl + '/register', {
                    ...data,
                }
            )
            console.log('signup response:', response.data)
        }catch (e) {
            setError(e.message)
            console.error(e.message)
        }finally {
            {error? navigate('/signin'):''}
        }
    }


  return (
    <>
      <h1>Registreren</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>

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