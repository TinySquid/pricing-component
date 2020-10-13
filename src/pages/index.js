import React from "react";

// Base page setup
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

// Components
import Pricing from "../components/pricing/pricing";

// Container style to align cards
import "../scss/pages/home.scss";

export default function Home() {
	return (
		<>
			<SEO />
			<Layout>
				<div className="container">
					<Pricing />
				</div>
			</Layout>
		</>
	);
}
