import React from 'react';

const Card = (props) => {
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
          style={{ height: 225, width: '100%', display: 'block', objectFit: 'cover' }}
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
              <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
