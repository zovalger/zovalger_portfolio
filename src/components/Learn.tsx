import React from "react";
import { Box, Typography } from "@mui/material";
import reactIcon from "../assets/logosSoftware/ReactIcon.png";
import nextIcon from "../assets/logosSoftware/next.png";
import javacriptIcon from "../assets/logosSoftware/javacript.png";
import typescriptIcon from "../assets/logosSoftware/typescript.png";
import gitIcon from "../assets/logosSoftware/git.png";
import githubIcon from "../assets/logosSoftware/github.png";
import nodeIcon from "../assets/logosSoftware/node.png";
import mysqlIcon from "../assets/logosSoftware/mysql_logo.png";
import mongoDBIcon from "../assets/logosSoftware/mongoDB_Icon.png";
import InfinityHorizontalScroll from "./InfinityHorizontalScroll";


const Learn = () => {
	return (
		<>
			<Typography variant="h2"> Conocimientos</Typography>

			<Box sx={{ display: "flex", mt: 8 }}>
				<Rombo icon={reactIcon} />
				<Rombo icon={nextIcon} p={1} />
				<Rombo icon={javacriptIcon} p={3.5} />
				<Rombo icon={typescriptIcon} p={3.5} />
			</Box>
			<Box sx={{ display: "flex" }}>
				<Rombo icon={gitIcon} p={2.5} />
				<Rombo icon={githubIcon} />
				<Rombo icon={nodeIcon} p={1.5} />
			</Box>
			<Box sx={{ display: "flex" ,mb:5}}>
				<Rombo icon={mysqlIcon} p={1.5} />
				<Rombo icon={mongoDBIcon} p={1.5} />
			</Box>

			<Box sx={{my:5}}>
				<InfinityHorizontalScroll />
			</Box>
		</>
	);
};

export default Learn;




interface props {
	icon: string;
	p?: string | number;
}

const Rombo = ({ icon, p = 3 }: props) => {
	return (
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
			<img src={icon} alt="software Icon" />
		</Box>
	);
};