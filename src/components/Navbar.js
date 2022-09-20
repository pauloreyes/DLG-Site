import React from "react";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/20/solid";
import SuthLogo from "../assets/Sutherland_R_Logo_Horiz_WHT.png";

export default function Navbar() {
	return (
		<div className='w-screen h-[80px] z-10 bg-transparent fixed'>
			<div className='px-2 flex justify-between items-center w-full h-full'>
				<div className='flex items-center'>
					<h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
						<img
							src={SuthLogo}
							alt='Sutherland.'
							className='ml-5 w-52 md:w-72 lg:w-100'
						/>
					</h1>
				</div>
				<div>
					<div className='flex justify-around pr-5'>
						<ul className='hidden md:flex pr-3 text-white font-semibold'>
							<li>Home</li>
							<li>Who We Are</li>
							<li>What We Do</li>
							<li>Digital Learning Portfolio</li>
							<li>Talk to Us</li>
						</ul>
						<Bars3Icon className='w-10 text-white' />
					</div>
				</div>
			</div>
		</div>
	);
}
