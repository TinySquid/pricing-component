import React, { useEffect } from "react";

import { HiOutlineLightBulb } from "react-icons/hi";

import "./styles.scss";

export default function ThemeSwitcher({ rootRef }) {
	useEffect(() => {
		if (rootRef.current) {
			rootRef.current.className = "theme--default";
		}
	}, [rootRef]);

	// Toggle page theme
	function setTheme(val) {
		rootRef.current.className = val ? "theme--dark" : "theme--default";
	}

	return (
		<div className="t-slider">
			<span className="t-slider-icon">
				<HiOutlineLightBulb />
			</span>
			<label className="t-container">
				<input type="checkbox" onChange={(e) => setTheme(e.target.checked)} />
				<span className="t-switch"></span>
			</label>
		</div>
	);
}
