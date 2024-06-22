"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Box, Zoom } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface props {
	icon: string | StaticImport;
	p?: string | number;
}

const Rombo = ({ icon, p = 3 }: props) => {
	const ref = useRef<undefined | HTMLElement>();

	const [visible, setVisible] = useState(false);
	const [changeContainer, setChangeContainer] = useState(false);

	const onVisible = () => {
		setVisible(true);
	};

	useIntersectionObserver({
		toObserver: ref.current,
		onVisible,
		options: { rootMargin: "-100px" },
	});

	useEffect(() => {
		if (visible)
			setTimeout(() => {
				setChangeContainer(true);
			}, 1000);
	}, [visible]);

	const content = (
		<Box
			sx={{
				position: "relative",
				width: 110,
				height: 110,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				p,
				filter: "drop-shadow(1px 1px 4px #0003)",
				mx: 4,

				transition: "transform 100ms",
				":hover": { transform: "scale(1.1)" },

				":before": {
					content: `""`,
					position: "absolute",
					background: "#fff",
					height: "100%",
					width: "100%",
					rotate: "45deg",
					borderRadius: 2,
				},
				img: { objectFit: "contain", position: "relative" },
			}}
		>
			<Image src={icon} alt="software Icon" height={64} />
		</Box>
	);

	return !changeContainer ? (
		<Zoom
			ref={ref}
			in={visible}
			style={{
				transitionDelay: "100ms",
			}}
		>
			{content}
		</Zoom>
	) : (
		content
	);
};

export default Rombo;
