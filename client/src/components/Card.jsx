import React from 'react';


const Card = (props) => {
    return (
        <div key={props._id}className="col-md-4">
          <div className="card mb-4 box-shadow">
            <img 
              className="card-img-top" 
              data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
              alt="Thumbnail [100%x225]" 
              style={{height: 225, width: '100%', display: 'block'}}
              src={props.image}
              data-holder-rendered="true" />
            <div className="card-body">
              <ul className="card-text">
                <li>Generation: {props.generation}</li>
                <li>{props.horsepower} horsepower</li>
                <li>{props.torque} lb. -ft torque</li>
                <li>Engine: {props.engine}</li>
              </ul>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-muted">{props.manufacturer} {props.model}</p>
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
              </div>
            </div>  
          </div>
        </div>
      )
}

export default Card;