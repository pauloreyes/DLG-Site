import React from "react";
import Navbar from "./Navbar";
import TalkToUsVideo from "../assets/DLGPrimerHD2.mp4";

export default function TalkToUs() {
	return (
		<div id='backgroundTTU'>
			<div>
				<Navbar />
				<div className='flex items-center justify-center h-screen'>
					<div className='w-[90%] flex items-center  flex-col md:flex-row mt-5 md:w-[900px] md:h-[450px] bg-white rounded-lg text-[#26235d] drop-shadow-xl'>
						<div
							className='flex m-5 items-center justify-center md:w-[65%] p-1 rounded'
							style={{ border: "1px solid #c5c7c5" }}
						>
							<video
								autoPlay
								loop
								controls
								muted
								controlsList='nodownload'
								width='100%'
							>
								<source src={TalkToUsVideo} type='video/webm' />
								Sorry, your browser doesn't support videos.
							</video>
						</div>
						<div className='m-2 p-1 md:w-[45%]'>
							<p className='text-xl font-bold'>Talk to Us</p>
							<p className='text-sm'>
								Let us know what you need. Reach out to us by filling out the form
								or head straight to our Learning as a Service Estimator app for a
								quick evaluation of your training needs.
							</p>
							<form className='m-3 text-xs font-bold'>
								<label>NAME</label>
								<input
									className='mt-[0.5px] bg-gray-50 border border-gray-300 text-gray-900 text-xs font-light rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-2'
									type='text'
									name='name'
								/>

								<label className='mt-[5px]'>EMAIL</label>
								<input
									className='bg-gray-50 border border-gray-300 text-gray-900 text-xs font-light rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-2'
									type='text'
									name='email'
								/>

								<label>MESSAGE</label>
								<textarea className='bg-gray-50 border border-gray-300 text-gray-900 text-xs font-light rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 mb-2'></textarea>
								<button className='mt-2 bg-[#26235d] hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full'>
									<input type='submit' />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
