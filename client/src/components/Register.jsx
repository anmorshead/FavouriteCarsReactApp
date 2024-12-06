import { useState } from 'react'
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

    const emailValidationRules = {
        required: "Email is required",
        pattern: {            
            value: /\S+@\S+\.\S+/,            
            message: "Please enter a valid email address",          
            },
        }


    return ( 
        <form className="form-signin" onSubmit={handleSubmit(receiveFormData)}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Please Register an Account with us</h1>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input {...register("firstName", {required:"First name cannot be blank", maxlength:20}) } id="firstName" className="form-control" placeholder="First Name" autoFocus />
            {errors.firstName && <span className="text-danger small">{errors.firstName.message}</span>}
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input {...register("lastName", {required:"Last name cannot be blank", pattern: /^[A-Za-z]+$/i, maxlength:40 }) } id="lastName" className="form-control" placeholder="Last Name"/>
            {errors.lastName && <span className="text-danger small">{errors.lastName.message}</span>}
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input {...register("email", emailValidationRules) } id="inputEmail" className="form-control" placeholder="Email address" autoFocus />
            {errors.email && <span className="text-danger small">{errors.email.message}</span>}
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input {...register("password", {required:"Password is required"}) }type="password" id="inputPassword" className="form-control" placeholder="Password"/>
            {errors.password && <span className="text-danger small">{errors.password.message}</span>}
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
     );
}
 
export default Register;