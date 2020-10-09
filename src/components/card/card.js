import React from "react";

import "./styles.scss";

export default function Card({ primary, title, price, items }) {
	/*
    primary -> flag that changes coloring
    title -> plan title str
    price -> plan price
    items -> plan features 
  */

	return (
		<div className={primary ? "card primary" : "card secondary"}>
			<h1>{title}</h1>
			<h2>{price}</h2>

			<ul>
				{items.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>

			<button className={primary ? "btn primary" : "btn secondary"}>
				Learn More
			</button>
		</div>
	);
}
