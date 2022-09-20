import React from "react";
import VRBG from "../assets/VR-bg.jpg";

export default function Main() {
	return (
		<div
			style={{
				backgroundImage: `url(${VRBG})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100vw",
				height: "100vh",
				filter: "brightness(30%)",
			}}
		></div>
	);
}
