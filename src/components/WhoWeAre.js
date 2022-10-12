import React from "react";
import Navbar from "./Navbar";

export default function WhoWeAre() {
	return (
		<div>
			<Navbar />
			<div className='bg-[#26235d] h-screen pt-24 px-5 md:pt-20'>
				<div
					className='h-[500px] flex justify-center items-center px-2 md:p-5 flex-wrap'
					// style={{ border: "1px solid white" }}
				>
					<div className='md:m-5 w-full flex flex-col md:flex-row flex-wrap'>
						<div className='text-white md:w-[550px] md:m-2 '>
							<div className='text-xl md:text-3xl pb-2'>Who We Are</div>
							<div className='text-xs md:text-base'>
								Our training solutions are backed by experience, knowledge,
								theories, and empirical study that help determine what best suit our
								learners. We offer solutions that range from tried-and-tested
								classroom content to highly engaging technology-enabled platforms
								with a wide range of products to address your learning needs.
							</div>
						</div>
						<div className='md:w-[500px] flex flex-col md:flex-row flex-wrap justify-center items-center m-2 grow md:gap-8'>
							<div className='text-black m-2 w-[200px] h-[200px] bg-white rounded-md drop-shadow-md'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-16 h-16 mt-5 ml-2'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
										/>
									</svg>
									<div className='ml-5 text-xl font-bold mt-10  text-transparent bg-clip-text bg-gradient-to-r from-[#26235d] via-[#7A4B88] to-[#9D265E]'>
										OUR LEARNING PHILOSOPHY
									</div>
								</div>
							</div>
							<div className='text-black m-2 w-[200px] h-[200px]  bg-white rounded-md drop-shadow-md '>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-16 h-16 mt-5 ml-2 '
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'
										/>
									</svg>
									<div className='mx-5 text-xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#26235d] via-[#7A4B88] to-[#9D265E]'>
										OUR CAPABILITY
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
