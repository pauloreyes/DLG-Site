import React, { useContext } from "react";
import { motion } from "framer-motion";
import SiteContexts from "../SiteContexts";

export default function OurCapability() {
	const { handleModal2 } = useContext(SiteContexts);
	return (
		<motion.div
			className='absolute top-0 left-0 h-full w-full  bg-[#0000002a] flex justify-center items-center z-20'
			onClick={handleModal2}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='w-[80%] md:w-[60%] h-[500px] md:h-[390px] bg-white rounded z-100 drop-shadow-2xl'
			>
				<div className='pl-1 ml-4 mt-3 border-l-2 border-[#26235d]'>
					<p className='text-[#26235d] font-semibold'>LEARNING TRANSFORMATION</p>
					<p className='text-[#DB1E56] font-bold'>CAPABILITIES</p>
				</div>
			</div>
		</motion.div>
	);
}
