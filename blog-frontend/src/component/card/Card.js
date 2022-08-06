import React from "react";
import "./Card.css";

function Card({ name, email }) {
  return (
    <div className="card">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
    </div>
  );
}

export default Card;
