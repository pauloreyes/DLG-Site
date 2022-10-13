import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import SuthLogo from "../assets/Sutherland_R_Logo_Horiz_WHT.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
					<div className='flex justify-around pr-0 mr-0 md:mr-5'>
						<ul className='hidden md:flex pr-3 text-white font-light md:text-[10px] lg:text-base'>
							<Link to='/whoweare'>
								<li className='hover:bg-[#00000062] rounded-lg'>Who We Are</li>
							</Link>
							<Link to='/whatwedo'>
								<li className='hover:bg-[#00000062] rounded-lg'>What We Do</li>
							</Link>
							<Link to='/methodology'>
								<li className='hover:bg-[#00000062] rounded-lg'>Methodology</li>
							</Link>
							<Link to='/portfolio'>
								<li className='hover:bg-[#00000062] rounded-lg'>
									Digital Learning Portfolio
								</li>
							</Link>
							<Link to='/talktous'>
								<li className='hover:bg-[#00000062] rounded-lg'>Talk to Us</li>
							</Link>
						</ul>

						<div>
							<Button
								id='basic-button'
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup='true'
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<Bars3Icon className='w-10 text-white' />
							</Button>

							<Menu
								id='basic-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
								PaperProps={{
									style: {
										width: 250,
									},
								}}
							>
								<MenuItem onClick={handleClose}>
									<Link
										to='/whoweare'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Who We Are
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/whatwedo'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										What We Do
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/methodology'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Methodology
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/techsuite'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Technology Suite
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/laas'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Service Offerings
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/awardsandtestimonials'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Awards and Testimonials
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/portfolio'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Digital Learning Portfolio
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/casestudies'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Case Studies
									</Link>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<Link
										to='/talktous'
										className='hover:text-[#26235d] hover:font-semibold w-[100%]'
									>
										Talk to Us
									</Link>
								</MenuItem>
							</Menu>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
