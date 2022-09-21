import React from "react";
import Navbar from "./Navbar";

export default function WhoWeAre() {
	return (
		<div className='flex'>
			<Navbar />
			<div className='bg-[#26235d] h-screen' style={{ minWidth: "100%" }}>
				<div className='ml-[1.5rem] text-lg mt-[5rem] lg:ml-[8rem] lg:mt-[10rem] md:text-5xl text-white md:w-[450px] pr-5'>
					Who We Are
				</div>
				<div className='ml-[1.5rem] lg:ml-[8rem] mt-[5px] text-[16px] text-white md:w-[450px] pr-5'>
					<p>
						Our training solutions are backed up by experience, knowledge, theories, and
						empirical study that help determine what best suit our learners. We offer
						solutions that range from tried-and-tested classroom content to highly
						engaging technology-enabled platforms with a wide range of products to
						address your learning needs.
					</p>
				</div>
			</div>
		</div>
	);
}
