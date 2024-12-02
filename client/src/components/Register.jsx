import React from 'react';
import '../css/signin.css';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService';

const Register = props => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const navigate = useNavigate();

    function receiveFormData(collectedData){
        authService.register(collectedData, (success) => {
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
            <h1 className="h3 mb-3 font-weight-normal text-center">Please Register an Account with us</h1>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input {...register("firstName") } id="firstName" className="form-control" placeholder="First Name" autoFocus />
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input {...register("lastName") } id="lastName" className="form-control" placeholder="Last Name"/>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input {...register("email") } id="inputEmail" className="form-control" placeholder="Email address" autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input {...register("password") }type="password" id="inputPassword" className="form-control" placeholder="Password"/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
     );
}
 
export default Register;