import React, { useContext } from "react";
import AnimatedOpen from "./AnimatedOpen";
import VRBG from "../assets/VR-bg.png";
import SiteContexts from "./SiteContexts";
import Navbar from "./Navbar";

export default function Main() {
	const { animation } = useContext(SiteContexts);

	return (
		<div>
			<Navbar />
			<div
				style={{
					backgroundImage: `url(${VRBG})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100vw",
					height: "100vh",
					maxWidth: "100%",
				}}
			>
				{animation && <AnimatedOpen />}
			</div>
		</div>
	);
}
