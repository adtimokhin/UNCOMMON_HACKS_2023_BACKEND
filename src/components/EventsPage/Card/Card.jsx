import React from 'react';
import './Card.css';

const Card = (props) => {
  const imageURL = props.imageURL;

  

  return (
    <div className="card-event relative rounded-lg shadow-lg p-6 h-[100%]" onClick={() => {
        props.onCardClick("DATA FOR THE POPUP CARD")
    }}>
         <div className=""></div>
      <img
        src={imageURL}
        alt={props.title}
        className="absolute h-full w-full object-cover z-0 top-0 left-0"
        draggable="false"
      />
      <div className="absolute z-10 bottom-2 left-5">
        <h2 className="text-xl font-bold mb-4 bg-slate-50">{props.title}</h2>
        <p className="text-gray-700 bg-slate-50">{props.location}</p>
      </div>
    </div>
  );
};

export default Card;
