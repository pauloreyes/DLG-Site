// import React, { useContext } from "react";
import AnimatedGif from "../assets/AnimatedOpening.gif";
// import SiteContexts from "./SiteContexts";

export default function AnimatedOpen() {
	// const { handleAnimation } = useContext(SiteContexts);

	return (
		<div className='flex justify-center align-middle pt-[75px] md:pt-5 h-[30%] w-[100%] md:h-[98%] md:w-full'>
			<div className='flex justify-center align-middle'>
				<img src={AnimatedGif} alt='animated opening' />
			</div>
		</div>
	);
}
