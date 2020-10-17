import React from "react";
import "../../scss/global.scss";

export default function Layout({ children }) {
	return <div className="theme--default">{children}</div>;
}
