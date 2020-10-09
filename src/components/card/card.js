import React from "react";

export default function Card({ primary, title, price, items }) {
	/*
    primary -> flag that changes coloring
    title -> plan title str
    price -> plan price
    items -> plan features 
  */

	return (
		<div className={"card " + primary ? "primary" : "secondary"}>
			<h1>{title}</h1>
			<h2>{price}</h2>

			<ul>
				{items.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>

			<button className={"btn " + primary ? "primary" : "secondary"}>
				Learn More
			</button>
		</div>
	);
}
