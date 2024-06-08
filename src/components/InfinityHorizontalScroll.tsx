import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import mongooseIcon from "../assets/logosSoftware/mongoose.png";
import axiosIcon from "../assets/logosSoftware/axios.png";
import cloudinaryIcon from "../assets/logosSoftware/cloudinary.png";
import materialUIIcon from "../assets/logosSoftware/material ui.png";
import expressValidatorIcon from "../assets/logosSoftware/express validator.png";
import leafletIcon from "../assets/logosSoftware/leaflet.png";
import passportIcon from "../assets/logosSoftware/Passport-js.png";
import expressIcon from "../assets/logosSoftware/express.png";
import socketIcon from "../assets/logosSoftware/socket-io.png";
import reactstrapIcon from "../assets/logosSoftware/Reactstrap.png";
import formikIcon from "../assets/logosSoftware/formik.png";
import sequelizeIcon from "../assets/logosSoftware/sequelize.png";
import SQLiteIcon from "../assets/logosSoftware/SQLite.png";
import reduxIcon from "../assets/logosSoftware/redux.png";

const a = [
	mongooseIcon,
	reactstrapIcon,
	cloudinaryIcon,
	materialUIIcon,
	expressValidatorIcon,
	leafletIcon,
	reduxIcon,
];
const b = [
	expressIcon,
	axiosIcon,
	socketIcon,
	formikIcon,
	sequelizeIcon,
	SQLiteIcon,
	passportIcon,
];

const InfinityHorizontalScroll = () => {
	const first = useRef<HTMLDivElement>(null);

	const [z, setz] = useState<number>(0);

	useEffect(() => {
		setz(
			setInterval(() => {
				if (!first.current) return;

				

				if (first.current.scrollLeft > first.current.scrollWidth / 2)
					first.current.scrollTo({ behavior: "instant", left: 60 });

				first.current.scrollBy({ behavior: "smooth", left: 2 });
			}, 90)
		);

		return () => {
			clearInterval(z);
		};
	}, [first.current]);

	return (
		<Box
			sx={{
				maxWidth: "900px",
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
				ref={first}
				sx={{
					overflowX: "scroll",
					px: 8,
					"::-webkit-scrollbar": {
						display: "none",
					},
				}}
			>
				<Box sx={{ display: "flex", pl: 8, mb: 2 }}>
					{a.map((i) => (
						<img
							src={i}
							alt="software Icon"
							style={{ maxHeight: 32, marginRight: 48, width: "auto" }}
						/>
					))}
					{a.map((i) => (
						<img
							src={i}
							alt="software Icon"
							style={{ maxHeight: 32, marginRight: 48, width: "auto" }}
						/>
					))}
				</Box>
				<Box sx={{ display: "flex" }}>
					{b.map((i) => (
						<img
							src={i}
							alt="software Icon"
							style={{ maxHeight: 32, marginRight: 48, width: "auto" }}
						/>
					))}
					{b.map((i) => (
						<img
							src={i}
							alt="software Icon"
							style={{ maxHeight: 32, marginRight: 48, width: "auto" }}
						/>
					))}
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
