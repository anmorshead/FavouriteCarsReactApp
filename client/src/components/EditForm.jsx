import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function EditForm() {
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const location = useLocation(); //need to use to get car object
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const passedCar = location.state?.car;  //get car object from Router's state property from prev page
    if (passedCar) {
      setCar(passedCar); //store car data
      setValue("model", passedCar.model);
      setValue("manufacturer", passedCar.manufacturer);
      setValue("image", passedCar.image)
      setValue("generation", passedCar.generation);
      setValue("performance.horsepower", passedCar.horsepower);
      setValue("performance.torque", passedCar.torque);
      setValue("performance.engineType", passedCar.engine);
    }
  }, [location.state, setValue]); //dependencies

  const updateFormData = (data) => {
    const carId = car._id; //get car ID from state
    axios
      .put(`http://localhost:3002/api/cars/${carId}`, data, {withCredentials: true,})  // Update car details
      .then(() => {
        console.log("Car updated successfully!");
        navigate('/'); //navigate home
      })
      .catch((error) => console.error("Error updating car:", error));
  };

  if (!car) return <div>Loading...</div>; //loading state if car data is not yet loaded
  //otherwise:
  return (
    <div className="container mt-5">
      <h1>Edit Car</h1>
      <form className="form-signin" onSubmit={handleSubmit(updateFormData)}>
        <h1 className="h3 mb-3 font-weight-normal text-center">
          Edit Your Car Details
        </h1>

        <label htmlFor="manufacturer" className="sr-only">Make</label>
            <input {...register("manufacturer") } id="manufacturer" className="form-control" placeholder="Make" autoFocus />
            <label htmlFor="model" className="sr-only">Model</label>
            <input {...register("model") } id="model" className="form-control" placeholder="Model"/>
            <label htmlFor="image" className="sr-only">Image</label>
            <input {...register("image") } id="image" className="form-control" placeholder="Link to Image" autoFocus />
            <h5 className="m-3 font-weight-normal text-center">Extra Info if you know it...</h5>

            <label htmlFor="generation" className="sr-only">Generation</label>
            <input {...register("generation") } id="generation" className="form-control" placeholder="Generation"/>
            <label htmlFor="performance.horsepower" className="sr-only">Horsepower</label>
            <input {...register("performance.horsepower") }id="performance.horsepower" className="form-control" placeholder="Horsepower"/>
            <label htmlFor="performance.torque" className="sr-only">Torque</label>
            <input {...register("performance.torque") }id="performance.torque" className="form-control" placeholder="Torque"/>
            <label htmlFor="performance.engineType" className="sr-only">Engine</label>
            <input {...register("performance.engineType") }id="performance.engineType" className="form-control" placeholder="Engine"/>



        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">
          Save Changes
        </button>
        <button
          className="btn btn-lg btn-secondary btn-block mt-3"
          type="button"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
