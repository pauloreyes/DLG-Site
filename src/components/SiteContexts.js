import React, { createContext, useState } from "react";

const SiteContexts = createContext();

export function ContextProvider({ children }) {
	const [animation, setAnimation] = useState(false);
	const [openModal1, setOpenModal1] = useState(true);
	const handleModal1 = () => {
		setOpenModal1(!openModal1);
	};

	const [openModal2, setOpenModal2] = useState(true);
	const handleModal2 = () => {
		setOpenModal2(!openModal2);
	};

	function handleAnimation() {
		return setAnimation(false);
	}

	const value = {
		animation,
		handleAnimation,
		openModal1,
		handleModal1,
		openModal2,
		handleModal2,
	};

	return <SiteContexts.Provider value={value}>{children}</SiteContexts.Provider>;
}

export default SiteContexts;
