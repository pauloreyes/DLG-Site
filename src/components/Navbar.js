import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SuthLogo from "../assets/Sutherland_R_Logo_Horiz_WHT.png";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className='w-screen h-[80px] z-10 bg-transparent fixed'>
			<div className='px-2 flex justify-between items-center w-full h-full'>
				<div className='flex items-center'>
					<h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
						<Link to='/'>
							<img
								src={SuthLogo}
								alt='Sutherland.'
								className='ml-2 md:ml-5 w-52 md:w-72 lg:w-100'
							/>
						</Link>
					</h1>
				</div>
				<div>
					<div className='flex justify-around pr-5'>
						<ul className='hidden md:flex pr-3 text-white font-semibold'>
							<Link to='/WhoWeAre'>
								<li className='hover:bg-gray-600'>Who We Are</li>
							</Link>
							<Link to='/WhatWeDo'>
								<li className='hover:bg-gray-600'>What We Do</li>
							</Link>
							<Link to='/Methodology'>
								<li className='hover:bg-gray-600'>Methodology</li>
							</Link>
							<Link to='/Portfolio'>
								<li className='hover:bg-gray-600'>Digital Learning Portfolio</li>
							</Link>
							<Link to='/TalkToUs'>
								<li className='hover:bg-gray-600'>Talk to Us</li>
							</Link>
						</ul>
						<Bars3Icon className='w-10 text-white' />
					</div>
				</div>
			</div>
		</div>
	);
}
