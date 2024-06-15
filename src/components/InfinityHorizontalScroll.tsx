"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

import mongooseIcon from "@/assets/logosSoftware/mongoose.png";
import axiosIcon from "@/assets/logosSoftware/axios.png";
import cloudinaryIcon from "@/assets/logosSoftware/cloudinary.png";
import materialUIIcon from "@/assets/logosSoftware/material ui.png";
import expressValidatorIcon from "@/assets/logosSoftware/express validator.png";
import leafletIcon from "@/assets/logosSoftware/leaflet.png";
import passportIcon from "@/assets/logosSoftware/Passport-js.png";
import expressIcon from "@/assets/logosSoftware/express.png";
import socketIcon from "@/assets/logosSoftware/socket-io.png";
import reactstrapIcon from "@/assets/logosSoftware/Reactstrap.png";
import formikIcon from "@/assets/logosSoftware/formik.png";
import sequelizeIcon from "@/assets/logosSoftware/sequelize.png";
import SQLiteIcon from "@/assets/logosSoftware/SQLite.png";
import reduxIcon from "@/assets/logosSoftware/redux.png";

const firstLine = [
	mongooseIcon,
	reactstrapIcon,
	cloudinaryIcon,
	materialUIIcon,
	expressValidatorIcon,
	leafletIcon,
	reduxIcon,
];
const secondLine = [
	expressIcon,
	axiosIcon,
	socketIcon,
	formikIcon,
	sequelizeIcon,
	SQLiteIcon,
	passportIcon,
];

const InfinityHorizontalScroll = () => {
	const containerScroll = useRef<HTMLDivElement>(null);

	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setIntervalId(
			setInterval(() => {
				if (!containerScroll.current) return;

				if (
					containerScroll.current.scrollLeft >
					containerScroll.current.scrollWidth / 2
				)
					containerScroll.current.scrollTo({ behavior: "instant", left: 60 });

				containerScroll.current.scrollBy({ behavior: "smooth", left: 2 });
			}, 90)
		);

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [containerScroll.current]);

	const lineOne = firstLine.map((imgData, index) => (
		<Image
			src={imgData}
			key={index}
			alt="software Icon"
			height={32}
			style={{ maxHeight: 32, marginRight: 48, width: "auto" }}
		/>
	));

	const lineTwo = secondLine.map((imgData, index) => (
		<Image
			src={imgData}
			key={index}
			alt="software Icon"
			height={32}
			style={{ maxHeight: 32, marginRight: 48, width: "auto" }}
		/>
	));

	return (
		<Box
			sx={{
				maxWidth: "1000px",
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					background:
						"linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(244,244,244,0.22032563025210083) 100%)",
					top: 0,
					bottom: 0,
					left: 0,
					width: 100,
				}}
			/>

			<Box
				ref={containerScroll}
				sx={{
					overflowX: "scroll",
					px: 8,
					"::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				<Box sx={{ display: "flex", pl: 8, mb: 2 }}>
					{lineOne}
					{lineOne}
				</Box>
				<Box sx={{ display: "flex" }}>
					{lineTwo}
					{lineTwo}
				</Box>
			</Box>

			<Box
				sx={{
					position: "absolute",
					background:
						"linear-gradient(-90deg, rgba(244,244,244,1) 0%, rgba(244,244,244,0.22032563025210083) 100%)",
					top: 0,
					bottom: 0,
					right: 0,
					width: 100,
				}}
			/>
		</Box>
	);
};

export default InfinityHorizontalScroll;
