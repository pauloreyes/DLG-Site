import React, { useContext } from "react";
import SiteContexts from "../SiteContexts";

export default function OurPhilosophy() {
	const { openModal1, handleModal1 } = useContext(SiteContexts);

	return (
		<div
			className='absolute top-0 left-0 h-full w-full bg-[#000000e1] flex justify-center items-center z-20'
			style={{}}
			onClick={handleModal1}
		>
			<div className='text-white'>Our Learning Philosophy</div>
		</div>
	);
}
