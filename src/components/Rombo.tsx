"use client";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Box, Zoom } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRef, useState } from "react";

interface props {
	icon: string | StaticImport;
	p?: string | number;
}

const Rombo = ({ icon, p = 3 }: props) => {
	const ref = useRef<undefined | HTMLElement>();

	const [visible, setVisible] = useState(false);

	const onVisible = () => {
		setVisible(true);
	};

	const onNoVisible = () => {
		setVisible(false);
	};

	const { observed } = useIntersectionObserver({
		toObserver: ref.current,
		onVisible,
		// onNoVisible,
	});

	return (
		<Zoom ref={ref} in={visible} style={{ transitionDelay: "100ms" }}>
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
		</Zoom>
	);
};

export default Rombo;
