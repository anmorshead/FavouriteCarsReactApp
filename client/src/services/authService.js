import axios from "axios";

class authService {

    async register(collectedData, callback){
        //make call to register API endpoint
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, collectedData, {withCredentials: true})
            switch(response.status){
                case 201:{
                    sessionStorage.setItem("isloggedIn", "true")
                    sessionStorage.setItem("user", collectedData.email)
                    callback(true)
                    break;
                }
                case 422:{
                    callback(false)
                    break;
                }
                case 500:{
                    callback(false)
                    break;
                }
            }
        } catch (err) {
            console.log('invalid login')
        }
    }

    async signIn(collectedData, callback){
        //make call to login API endpoint
        //send form data to login endpoint
        try {
            //recevied 200 response form API
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, collectedData, {withCredentials: true})
            sessionStorage.setItem("isloggedIn", "true")
            sessionStorage.setItem("user", collectedData.email)
            callback(true)

        } catch (err) {
            //received something else
            callback(false)
        }

    }

    async signOut(callback){
        //delete token from cookies
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`)
            sessionStorage.removeItem("isLoggedIn")
            sessionStorage.removeItem("user")
            callback(true)
           
        } catch (err) {
            callback(false)
            console.log('an error occurred')
        }
    }

    isSignedIn(){
        //check for existance of value in sessionStorage
        return !!sessionStorage.getItem('isLoggedIn')
    }

    getSignedInUser(){
        return sessionStorage.getItem('user')
    }


}

export default new authService()