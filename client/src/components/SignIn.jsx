import '../css/signin.css';
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService';

const SignIn = props => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState("");

    function receiveFormData(collectedData){
      authService.signIn(collectedData, (success) => {
        if(success){
            sessionStorage.setItem('isLoggedIn', 'true')
            navigate('/')
        }else{
          setLoginMessage("Incorrect Login, plz leave")
        }
      })
    }
    
    const emailValidationRules = {
      required: "Email is required",
      pattern: {            
        value: /\S+@\S+\.\S+/,            
        message: "Please enter a valid email address",          
      },
      onChange: () => setLoginMessage('')
    }
    const passwordValidationRules = {
      required: "Password is required",
      onChange: () => setLoginMessage('')      
      }


    return ( 
      <>
          <form className="form-signin" onSubmit={handleSubmit(receiveFormData)}>
              <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input {...register("email", emailValidationRules)} id="inputEmail" className="form-control" placeholder="Email address" autoFocus />
              {errors.email && <span className="text-danger small">{errors.email.message}</span>}
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input {...register("password", passwordValidationRules) }type="password" id="inputPassword" className="form-control" placeholder="Password"/>
              {errors.password && <span className="text-danger small">{errors.password.message}</span>}
              <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              <p className="text-danger small mt-2">{loginMessage}</p>
          </form>

        </>
     );
}
 
export default SignIn;