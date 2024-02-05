import React from "react";
import "../styles/Card.css"

function Card(props) {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="University">
        <a href={props.Course_Link} className="card-link" target="_blank">
          <img src={props.imageURL} className="card-img-top" alt="..." />
        </a>
        <div className="card-body">
          <h4 className="card-title">{props.title} </h4>
          <i style={{ fontSize: "13px" }}>{props.Type_of_University}</i>
          <p className="card-text">
            {props.degree} in {props.subject}
          </p>
        </div>
        <div className="card-body">
          <a href={props.Course_Link} className="card-link" target="_blank">
            Course link
          </a><br/>
          <a
            href={props.Application_Link}
            className="card-link2"
            target="_blank"
          >
            Application link
          </a>
        </div>
      </div>
      <div className="details"style={{ width: "30rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Location: </b>
            {props.City}, {props.State}
          </li>
          <li className="list-group-item">
            <b>Duration: </b>
            {props.Duration}{" "}
          </li>
          <li className="list-group-item">
            <b>Teaching Language: </b>
            {props.Teaching_Language}
          </li>
          <li className="list-group-item">
            <b>Tuition Fee: </b>
            {props.Tuition_Fee}
          </li>
          <li className="list-group-item">
            <b>Course Ranking: </b>
            {props.Course_Ranking}
          </li>
          <li className="list-group-item">
            <b>German Ranking: </b>
            {props.German_Ranking}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
