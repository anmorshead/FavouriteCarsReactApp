import React from 'react';
import authService from '../services/authService';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
const location = useLocation(); //HACK

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          <strong>My Favourite Cars</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          {/* Left-aligned link */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/create" className="nav-link">Add Car <span className="sr-only"></span></Link>
            </li>
          </ul>

          {/* Right-aligned links */}
          <ul className="navbar-nav ml-auto">
            {authService.isSignedIn() ? (
              <li className="nav-item dropdown">
                <h6 className="nav-link active dropdown-toggle" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome {authService.getSignedInUser()}</h6>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <Link to="/logout" className="dropdown-item" >Logout</Link>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item active">
                <Link to="/signin" className="nav-link" >Login<span className="sr-only"></span></Link>
                </li>
                <li className="nav-item active">
                  <Link to="/register" className="nav-link" >Register<span className="sr-only"></span></Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
