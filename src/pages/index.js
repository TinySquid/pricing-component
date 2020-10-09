import React from "react";
import Layout from "../components/layout/layout";

import SEO from "../components/seo";

export default function Home() {
	return (
		<>
			<SEO />
			<Layout>
				<p>Hello world!</p>
			</Layout>
		</>
	);
}
