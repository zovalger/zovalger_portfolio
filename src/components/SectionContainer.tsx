"use client";

import { useNavBarContext } from "@/contexts/NavBar.context";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

interface props {
	id: string;
	children: React.ReactElement;
}

const SectionContainer = ({ id, children }: props) => {
	const { changeSectionId } = useNavBarContext();

	const ref = useRef<undefined | HTMLElement>();

	const onVisible = () => {
		changeSectionId(`#${id}`);
	};

	useIntersectionObserver({
		toObserver: ref.current,
		onVisible,
		options: { rootMargin: "-100px", threshold: 0.2 },
	});

	return (
		<Box ref={ref} id={id}>
			{children}
		</Box>
	);
};

export default SectionContainer;
