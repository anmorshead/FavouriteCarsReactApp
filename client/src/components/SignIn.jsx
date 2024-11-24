import React from 'react';
import '../css/signin.css';
import { useForm } from 'react-hook-form'
import axios from 'axios';

const SignIn = props => {
    const {register, formState:{errors}, handleSubmit} = useForm();

    function receiveFormData(collectedData){
        console.log(collectedData)
        //send form data to login endpoint
        axios.post("http://localhost:3002/api/users/login", collectedData)
        .then(response => console.log(response))


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