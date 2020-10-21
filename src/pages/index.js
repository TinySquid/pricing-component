import React, { useRef } from "react";

// Base page setup
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

// Components
import Pricing from "../components/pricing/pricing";
import Footer from "../components/footer/footer";
import ThemeSwitcher from "../components/theme-switcher/theme-switcher";

// Container style to align cards on page
import "../scss/pages/home.scss";

export default function Home() {
	const rootNode = useRef(null);

	return (
		<div className="theme--default" ref={rootNode}>
			<SEO />
			<Layout>
				<div className="container">
					<div>
						<ThemeSwitcher rootRef={rootNode} />
						<Pricing />
					</div>
					<Footer />
				</div>
			</Layout>
		</div>
	);
}
