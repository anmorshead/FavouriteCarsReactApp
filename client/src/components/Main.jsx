import React, { useEffect, useState } from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

const Main = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    //fetch data from api
    axios.get(`http://localhost:3002/api/cars`)
      .then(response => {
      setCars(response.data)
      })
  },[])


    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search this site" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

              {
                cars.map(car => {
                  return (
                    <div key={car._id}className="col-md-4">
                      <div className="card mb-4 box-shadow">
                        <img 
                          className="card-img-top" 
                          data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                          alt="Thumbnail [100%x225]" 
                          style={{height: 225, width: '100%', display: 'block'}}
                          src={car.image}
                          data-holder-rendered="true" />
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                            </div>
                            <small className="text-muted">{car.model}</small>
                          </div>
                        </div>  
                      </div>
                    </div>
                  )
                })
              }

         

            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;