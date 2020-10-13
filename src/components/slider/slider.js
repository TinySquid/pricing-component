import React from "react";

import "./styles.scss";

export default function Slider({ onText, offText, setValue }) {
	return (
		<div className="slider">
			<span className="slider-text">{offText}</span>
			<label className="switch-container">
				<input
					type="checkbox"
					onChange={(e) => setValue(e.target.checked)}
					defaultChecked
				/>
				<span className="switch"></span>
			</label>
			<span className="slider-text">{onText}</span>
		</div>
	);
}
