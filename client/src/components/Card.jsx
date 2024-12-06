import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    const car = {
      _id: props._id,
      image: props.image,
      model: props.model,
      manufacturer: props.manufacturer,
      generation: props.generation,
      performance: {
        horsepower: props.horsepower,
        torque: props.torque,
        engineType: props.engine,
      },
    };
    navigate('/edit', { state: { car } }); //need to pass state with location (can't pass with props)
  };
  

  const handleDelete = () => {
    //confirm before deletion
    const confirmation = window.confirm(`Delete the ${props.model}?`);//window pops up to ask for confirmation
    if (confirmation) {
      //call delete handler passed down from parent with id
      props.onDelete(props._id);
    }
  };


  return (
    <div key={props._id} className="col-md-4">
      <div className="card mb-4 box-shadow">
        {/* Card Header for Model and Manufacturer */}
        <div className="card-header text-center">
          <h5 className="card-title mb-0">{props.model}</h5>
          <small className="text-muted">{props.manufacturer}</small>
        </div>
        {/* Card Image */}
        <img 
          className="card-img-top" 
          alt={`${props.model}`} 
          src={props.image} 
        />
        {/* Card Body */}
        <div className="card-body">
          <ul className="card-text">
            <li>Generation: {props.generation}</li>
            <li>{props.horsepower} horsepower</li>
            <li>{props.torque} lb.-ft torque</li>
            <li>Engine: {props.engine}</li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleEdit(props)}>Edit</button>
              <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
