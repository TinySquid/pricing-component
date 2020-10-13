import React, { useState } from "react";

// Components
import Card from "../card/card";
import Slider from "../slider/slider";

// Plan price data
import plans from "./plans";

// Style
import "./styles.scss";

export default function Pricing() {
	const [planPeriod, setPlanPeriod] = useState("monthly");

	function togglePeriod(sliderValue) {
		sliderValue ? setPlanPeriod("monthly") : setPlanPeriod("annually");
	}

	return (
		<div className="pricing">
			<h1 className="price-header">Our Pricing</h1>

			<Slider onText="Monthly" offText="Annually" setValue={togglePeriod} />

			<div className="card-container">
				<Card
					position="left"
					title={plans.basic.title}
					price={
						planPeriod === "monthly"
							? plans.basic.price.monthly
							: plans.basic.price.annually
					}
					items={plans.basic.benefits}
				/>
				<Card
					primary
					title={plans.professional.title}
					price={
						planPeriod === "monthly"
							? plans.professional.price.monthly
							: plans.professional.price.annually
					}
					items={plans.professional.benefits}
				/>
				<Card
					position="right"
					title={plans.master.title}
					price={
						planPeriod === "monthly"
							? plans.master.price.monthly
							: plans.master.price.annually
					}
					items={plans.master.benefits}
				/>
			</div>
		</div>
	);
}
