import React from "react";
import "../stylesheets/Card.css";
import Pin from "../assets/pin.svg";

export default function Card({ destinations }) {
  return (
    <div>
    <div className="card">
      <div className="part-one">
        <img
          className="image"
          src={destinations.imageUrl}
          alt={destinations.title + " Image"}
          width="100px"
        />
      </div>

      <div className="part-two">
        <div className="location">
          <div className="country">
            <img src={Pin}/>
            <p>{destinations.location}</p>
          </div>
          <a href={destinations.googleMapsLink}>View on Google Maps</a>
        </div>

        <h3 className="dest-title">{destinations.title}</h3>

        <p className="dates">{`${destinations.startDate} - ${destinations.endDate}`}</p>

        <p>{destinations.description}</p>
      </div>
    </div>
    <hr></hr>
    </div>
  );
}
