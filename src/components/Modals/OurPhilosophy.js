import React, { useContext } from "react";
import { motion } from "framer-motion";
import SiteContexts from "../SiteContexts";
import PhilosophyImg from "../../assets/PhilosophyModalGraphics.png";

export default function OurPhilosophy() {
	const { handleModal1 } = useContext(SiteContexts);

	return (
		<motion.div
			className='absolute top-0 left-0 h-full w-full bg-[#0000002a] flex justify-center items-center z-20'
			onClick={handleModal1}
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
					<p className='text-[#26235d] font-semibold'>OUR LEARNING</p>
					<p className='text-[#DB1E56] font-bold'>PHILOSOPHY</p>
				</div>
				<div className='w-full h-full mt-1 flex justify-center item'>
					<img className='mt-20 w-[90%] h-[45%]' src={PhilosophyImg} />
				</div>
			</div>
		</motion.div>
	);
}
