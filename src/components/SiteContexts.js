import React, { createContext, useState } from "react";

const SiteContexts = createContext();

export function ContextProvider({ children }) {
	const [animation, setAnimation] = useState(false);

	function handleAnimation() {
		return setAnimation(false);
	}

	const value = { animation, handleAnimation };

	return <SiteContexts.Provider value={value}>{children}</SiteContexts.Provider>;
}

export default SiteContexts;
