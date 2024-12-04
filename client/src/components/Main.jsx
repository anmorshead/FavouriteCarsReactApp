import React, { useEffect, useState } from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [cars, setCars] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    //fetch data from api
    axios.get(`http://localhost:3002/api/cars`)
      .then(response => {
      setCars(response.data)
      })
  },[])

  function deleteCar(carId){
      axios.delete(`http://localhost:3002/api/cars/${carId}`, {withCredentials: true})
        .then(() => {
          //filter out the cars that arent the one to be deleted and set them in state
          setCars((prevCars) => prevCars.filter(car => car._id !== carId));
        })
        .catch((error) => {
          console.error('Error deleting car:', error);
        });
  }


    return ( 
      <div>
        <section className="jumbotron">
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
              {cars.map(car => {
                return <Card 
                key={car._id} 
                _id={car._id} 
                image={car.image} 
                model={car.model} 
                manufacturer={car.manufacturer} 
                generation={car.generation}
                horsepower={car.performance.horsepower} 
                engine={car.performance.engineType}
                torque={car.performance.torque}
                onDelete={deleteCar}  //pass deleteCar function as a prop to card
                />
              })}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Main;