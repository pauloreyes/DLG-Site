import React, { useContext } from "react";
import SiteContexts from "../SiteContexts";

export default function OurCapability() {
	const { openModal2, handleModal2 } = useContext(SiteContexts);
	return (
		<div
			className='absolute top-0 left-0 h-full w-full bg-[#000000e1] flex justify-center items-center z-20'
			style={{}}
			onClick={handleModal2}
		>
			<div className='text-white'>Our Capabilities</div>
		</div>
	);
}
