import React, { useContext } from "react";
import SiteContexts from "../SiteContexts";

export default function OurPhilosophy() {
	const { handleModal1 } = useContext(SiteContexts);

	return (
		<div
			className='absolute top-0 left-0 h-full w-full bg-[#0000002a] flex justify-center items-center z-20'
			onClick={handleModal1}
		>
			<div className='w-[80%] md:w-[60%] h-[500px] md:h-[390px] bg-white rounded z-100 drop-shadow-2xl'>
				<div className='pl-1 ml-4 mt-3 border-l-2 border-[#26235d]'>
					<p className='text-[#26235d] font-semibold'>OUR LEARNING</p>
					<p className='text-[#DB1E56] font-bold'>PHILOSOPHY</p>
				</div>
			</div>
		</div>
	);
}
