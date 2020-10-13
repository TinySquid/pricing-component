import React from "react";

import Button from "../button/button";

import "./styles.scss";

export default function Card({ position, primary, title, price, items }) {
	/*
		position -> Removes border styling on right/left side if provided - str - left | right  
    primary -> flag that changes coloring - bool
    title -> plan title - str
    price -> plan price - str
    items -> plan features - array
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
				{items.map((item, idx) => {
					return <li key={idx}>{item}</li>;
				})}
			</ul>

			<Button primary={primary}>Learn More</Button>
		</div>
	);
}
