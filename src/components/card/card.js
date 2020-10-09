import React from "react";

import Button from "../button/button";

import "./styles.scss";

export default function Card({ position, primary, title, price, items }) {
	/*
    primary -> flag that changes coloring
    title -> plan title str
    price -> plan price
    items -> plan features 
  */

	// Determine what classes to add to the card based on props
	let cardClass = "card ";

	if (primary) {
		cardClass += "primary";
	} else {
		cardClass += "secondary";
	}

	switch (position) {
		case "left":
			cardClass += " left";
			break;
		case "right":
			cardClass += " right";
			break;
		default:
			break;
	}

	return (
		<div className={cardClass}>
			<h1>{title}</h1>

			<h2>
				<span>$</span>
				{price}
			</h2>

			<ul>
				{items.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>

			<Button primary={primary}>Learn More</Button>
		</div>
	);
}
