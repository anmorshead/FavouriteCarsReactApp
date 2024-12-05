import { useForm } from 'react-hook-form'
import React from 'react';
import '../css/signin.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function CreateForm(){
    const {register, formState:{errors}, handleSubmit} = useForm();
    const navigate = useNavigate();

    function receiveFormData(collectedData){

        axios.post(`${import.meta.env.VITE_API_URL}/cars`, collectedData, {withCredentials: true,})
            .then((response) => {
                if (response.status === 201) {
                    console.log("Car Created:", response.data);
                    navigate('/'); // Redirect to home page
                }
            })
            .catch((error) => {
                console.error("Error Creating Car:", error.response || error);
            });
        }

    return(
        <form className="form-signin" onSubmit={handleSubmit(receiveFormData)}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Enter your favourite Car!</h1>
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


            <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Create Car</button>
        </form>
    )

}