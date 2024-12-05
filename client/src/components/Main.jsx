import React, { useEffect, useState } from 'react';
import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Card from './Card';

const Main = () => {
  const [cars, setCars] = useState([])
  const [searchTerm, setSearchTerm] = useState('');//needs to be empty string so all cars come back when search is empty

  useEffect(() => {
    //fetch data from api
    axios.get(`${import.meta.env.VITE_API_URL}/cars`)
      .then(response => {
      setCars(response.data)
      })
  },[])

  function deleteCar(carId){
      axios.delete(`${import.meta.env.VITE_API_URL}/cars/${carId}`, {withCredentials: true})
        .then(() => {
          //filter out the cars that arent the one to be deleted and set them in state
          setCars((prevCars) => prevCars.filter(car => car._id !== carId));
        })
        .catch((error) => {
          console.error('Error deleting car:', error);
        });
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); //deal with cases
  };

  // Filter cars based on search query
  const filteredCars = cars.filter((car) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      car.model.toLowerCase().includes(searchValue) ||
      car.manufacturer.toLowerCase().includes(searchValue)
    );
  });

    return ( 
      <div>
        <section className="jumbotron">
          <div className="container">
            <div className="input-group">
            <input type="text" 
                  className="form-control" 
                  placeholder="Search cars by model or manufacturer" 
                  value={searchTerm}
                  onChange={handleSearch}/>
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
              {filteredCars.map(car => {
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