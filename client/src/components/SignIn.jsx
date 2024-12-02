import React from 'react';
import '../css/signin.css';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService';

const SignIn = props => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const navigate = useNavigate();

    function receiveFormData(collectedData){
      authService.signIn(collectedData, (success) => {
        if(success){
            sessionStorage.setItem('isLoggedIn', 'true')
            navigate('/')
        }else{
            console.log("unsuccessful login")
        }
      })
    }


    return ( 
        <form className="form-signin" onSubmit={handleSubmit(receiveFormData)}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input {...register("email") } id="inputEmail" className="form-control" placeholder="Email address" autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input {...register("password") }type="password" id="inputPassword" className="form-control" placeholder="Password"/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
     );
}
 
export default SignIn;