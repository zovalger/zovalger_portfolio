"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

interface ContextProps {
	sectionId: string;
	changeSectionId(id: string): void;
}

const NavBarContext = createContext<ContextProps>({
	sectionId: "",
	changeSectionId: (id: string) => {},
});

export const NavBarContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [sectionId, setSectionId] = useState("");

	const changeSectionId = (id: string) => {
		setSectionId(id);
	};

	
	return (
		<NavBarContext.Provider
			value={{
				sectionId,
				changeSectionId,
			}}
		>
			{children}
		</NavBarContext.Provider>
	);
};

export const useNavBarContext = () => useContext(NavBarContext);
