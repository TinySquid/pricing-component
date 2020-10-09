import React from "react";

import "./styles.scss";

export default function Button({ primary, children }) {
	return (
		<button className={primary ? "btn primary" : "btn secondary"}>
			{children}
		</button>
	);
}
