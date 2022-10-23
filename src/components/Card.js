import React, { useEffect } from "react";
import "./Card.css";

function Card(props) {
	
	return (
		<div className="card">
			
			<div className="container">
            <h2 className="fullName">{props.full}</h2>
            <p>Panggilan: {props.nick}</p>
            <p>NIM: {props.nim}</p>
            <p>TTL: {props.ttl}</p>
            <p>No. HP: {props.phone}</p>
            <p>ID Line: {props.line}</p>
            <p>E-mail: {props.mail}</p>
          <p>Hobi: {props.hobby}</p>
			</div>
		</div>
	);
}



export default Card;