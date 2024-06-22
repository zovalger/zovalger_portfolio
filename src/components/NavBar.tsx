"use client";
import React, { useState } from "react";

import {
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import content from "@/content";
import { useNavBarContext } from "@/contexts/NavBar.context";

const NavBar = () => {
	const { sectionId, changeSectionId } = useNavBarContext();
	const theme = useTheme();
	const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

	const [openDrawer, setOpenDrawer] = useState(false);

	const openMenuDrawer = () => {
		setOpenDrawer(true);
	};

	const closeMenuDrawer = () => {
		setOpenDrawer(false);
	};

	const NavBarButton = (name: string, id: string) => {
		return !isUpMd ? (
			<ListItem>
				<ListItemButton
					onClick={() => {
						closeMenuDrawer();
						changeSectionId(id);
					}}
					href={id}
				>
					{/* <ListItemIcon>
						<InboxIcon />
					</ListItemIcon> */}
					<ListItemText primary={name} />
				</ListItemButton>
			</ListItem>
		) : (
			<Button
				variant="text"
				href={id}
				onClick={() => changeSectionId(id)}
				sx={{
					position: "relative",
					transition: ":before 200ms",
					color: "#A800FD",
					textTransform: "capitalize",
					":before":
						sectionId == id
							? {
									content: '""',
									borderBottom: "2px solid #A800FD",
									top: 0,
									left: "30%",
									bottom: 0,
									right: "30%",
									position: "absolute",
							  }
							: {},
				}}
			>
				{name}
			</Button>
		);
	};

	return (
		<>
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
					<Box
						sx={{ display: "flex", alignItems: "center" }}
						component="a"
						href="#hero"
					>
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

					{!isUpMd ? (
						<Box>
							<IconButton onClick={openMenuDrawer}>
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

							{NavBarButton("Conocimientos", "#learn")}
							{NavBarButton("Proyectos", "#proyects")}
							{NavBarButton("Conóceme más", "#more_about")}
							{NavBarButton("Contáctame", "#contact")}
						</Box>
					)}
				</Box>
			</Box>

			<Drawer
				open={openDrawer}
				anchor="right"
				PaperProps={{
					sx: {
						minWidth: "70vw",
					},
				}}
				// onClose={toggleDrawer(anchor, false)}
			>
				<Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
					<IconButton onClick={closeMenuDrawer}>
						<CloseIcon />
					</IconButton>
				</Box>
				<List>
					{NavBarButton("Conocimientos", "#learn")}
					{NavBarButton("Proyectos", "#proyects")}
					{NavBarButton("Conóceme más", "#more_about")}
					{NavBarButton("Contáctame", "#contact")}
				</List>
			</Drawer>
		</>
	);
};

export default NavBar;
