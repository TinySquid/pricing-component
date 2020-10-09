import React from "react";

// Base page setup
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

// Components
import Card from "../components/card/card";

export default function Home() {
	return (
		<>
			<SEO />
			<Layout>
				<Card
					primary
					title="Basic"
					price="19.99"
					items={["500 GB Storage", "5 Users Allowed", "Send up to 10GB"]}
				/>
			</Layout>
		</>
	);
}
