"use client";
import React from "react";

import {
	Box,
	Button,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import content from "@/content";

const NavBar = () => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				position: "fixed",
				top: 0,
				width: "100%",
				background: "#fffe",
				backdropFilter: "blur(3px)",
			}}
		>
			<Box
				sx={{
					maxWidth: "1000px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					px: 2,
					py: 1,
					width: "100%",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box sx={{ width: 50, height: 50, mr: 1 }}>
						<Image
							src={content.nav.logo}
							alt="logo zovalger"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</Box>

					<Typography sx={{ fontSize: 20 }} component="span">
						{content.nav.brandName}
					</Typography>
				</Box>

				{isMd ? (
					<Box>
						<IconButton>
							<MenuIcon />
						</IconButton>
					</Box>
				) : (
					<Box
						sx={{
							".MuiButton-root": {
								color: "#000000de",
							},
						}}
					>
						{/* <Button variant="text" href="#hero">
							Hero
						</Button> */}
						<Button
							variant="text"
							href="#learn"
							sx={{
								position: "relative",
								transition: ":before 200ms",
								color: "#A800FD",
								":before": {
									content: '""',
									borderBottom: "2px solid #A800FD",
									top: 0,
									left: "30%",
									bottom: 0,
									right: "30%",
									position: "absolute",
								},
							}}
						>
							Conocimientos
						</Button>
						<Button variant="text" href="#proyects">
							Proyectos
						</Button>
						<Button variant="text" href="#more_about">
							Conóceme más
						</Button>
						<Button variant="text" href="#contact">
							Contáctame
						</Button>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default NavBar;
