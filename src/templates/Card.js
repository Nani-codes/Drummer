import React from 'react'

function Card(props) {
  return (
    <div class="card" style={{width: "18rem"}}>
        <a href={props.Course_Link} class="card-link" target="_blank"><img src={props.imageURL} class="card-img-top" alt="..."/></a>
        <div class="card-body">
            <h4 class="card-title">{props.title} </h4><i style ={{fontSize :"13px"}}>{props.Type_of_University}</i>
            <p class="card-text">{props.degree} in {props.subject}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Location: </b>{props.City}, {props.State}</li>
            <li class="list-group-item"><b>Duration: </b>{props.Duration} </li>
            <li class="list-group-item"><b>Teaching Language: </b>{props.Teaching_Language}</li>
            <li class="list-group-item"><b>Tuition Fee: </b>{props.Tuition_Fee}</li>
            <li class="list-group-item"><b>Course Ranking: </b>{props.Course_Ranking}</li>
            <li class="list-group-item"><b>German Ranking: </b>{props.German_Ranking}</li>
        </ul>
        <div class="card-body">
            <a href={props.Course_Link} class="card-link" target="_blank">Course link</a>
            <a href={props.Application_Link} class="card-link" target="_blank">Application link</a>
        </div>
    </div>
  )
}

export default Card