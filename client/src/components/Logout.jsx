import authService from "../services/authService";
import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Logout(){
    const navigate = useNavigate();

      function handleLogout(){
        authService.signOut( (success) => {
            if(success){
                navigate('/')
            }else{
                console.log("unsuccessful logout")
            }
          })
        }

    return(
        <div className="logout-container">
        <h3>Are you sure you want to logout?</h3>
        <div>
          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/')} 
          >
            Cancel
          </button>
        </div>
      </div>
    )
        


}