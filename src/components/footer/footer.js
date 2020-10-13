import React from "react";

import "./styles.scss";

export default function Footer() {
	return (
		<span className="footer">
			<a href="https://miketnunes.com" target="_blank" rel="noreferrer">
				Michael Nunes
			</a>
			<span>--</span>
			<a
				href="https://github.com/TinySquid/pricing-component"
				target="_blank"
				rel="noreferrer"
			>
				Source
			</a>
		</span>
	);
}
