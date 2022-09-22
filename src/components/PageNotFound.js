import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div class='bg-[#26235d] lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 h-screen'>
			<div class='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
				<div class='relative'>
					<div class='absolute'>
						<div class=''>
							<h1 class='my-2 text-[#c5c7c5] font-bold text-2xl'>
								Sorry! Paulo has not built that page yet.
							</h1>
							<p class='my-2 text-[#c5c7c5]'>
								Please visit our homepage to get to where you need to go.
							</p>
							<Link to='/'>
								<button class='bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
									Take me there
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div>
				<img src='https://i.ibb.co/ck1SGFJ/Group.png' alt='icon' />
			</div>
		</div>
	);
}
