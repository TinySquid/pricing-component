import React from "react";

// Base page setup
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

// Components
import Card from "../components/card/card";

// Container style to align cards
import "../scss/pages/home.scss";

export default function Home() {
	return (
		<>
			<SEO />
			<Layout>
				<div className="container">
					<h1 className="price-header">Our Pricing</h1>
					<div className="card-container">
						<Card
							position="left"
							title="Basic"
							price="19.99"
							items={["500 GB Storage", "2 Users Allowed", "Send up to 3GB"]}
						/>
						<Card
							primary
							title="Professional"
							price="24.99"
							items={["1 TB Storage", "5 Users Allowed", "Send up to 10GB"]}
						/>
						<Card
							position="right"
							title="Master"
							price="39.99"
							items={["2 TB Storage", "10 Users Allowed", "Send up to 20GB"]}
						/>
					</div>
				</div>
			</Layout>
		</>
	);
}
