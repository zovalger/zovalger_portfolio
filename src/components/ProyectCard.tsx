"use client";
import screen_example from "@/assets/screen_example.jpg";

import { Box, Typography, Chip } from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import Image, { StaticImageData } from "next/image";

import { useState } from "react";

const i = [
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
	screen_example,
];
const ProyectCard = () => {
	// const theme = useTheme();
	// const isMd = useMediaQuery(theme.breakpoints.down("md"));

	const [selected, setSelected] = useState<StaticImageData>(screen_example);

	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<Box
				onClick={handleOpen}
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					borderLeft: "5px solid #A800FD",
					maxWidth: { xs: "100%", sm: "900px" },
					boxShadow: 2,
					borderRadius: 2,
					background: "#fff6",
					backdropFilter: "blur(3px)",
					overflow: "hidden",
					justifyContent: "space-between",
					mb: 2,
					transition: "transform 100ms",
					":hover": { transform: "scale(1.01)" },
				}}
			>
				<Box
					sx={{
						px: 3,
						py: 4,
						order: { xs: 1, md: 0 },
					}}
				>
					<Typography sx={{ fontWeight: 600, mb: 1 }} variant="h4">
						UNERG TGS
					</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
						deserunt tenetur ab quae incidunt accusamus, dignissimos expedita!
					</Typography>

					<Box
						sx={{
							mt: 2,
							display: "flex",
							flexWrap: "wrap",
							width: "100%",
							// justifyContent: "space-between",
							".MuiIconButton-root": {
								mr: 2,
							},
						}}
					>
						<Chip
							label="Socket"
							color="primary"
							variant="outlined"
							size="small"
						/>
					</Box>
				</Box>
				<Box sx={{}}>
					<Image
						src={screen_example}
						alt="proyect example"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>
			</Box>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
					// position: "relative",
				}}
				open={open}
				onClick={handleClose}
			>
				<Box onClick={(e) => e.stopPropagation()}>
					<Image
						src={selected}
						alt="proyect example"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>

				<Box
					onClick={(e) => e.stopPropagation()}
					sx={{
						position: "absolute",
						bottom: "1rem",

						px: 2,
						// background: "red",
						display: "flex",
						overflowX: "auto",
						overflowY: "hidden",

						"&>.MuiBox-root": {
							mr: 1,
							flexShrink: 0,
							height: "5rem",
							borderRadius: 1,
							overflow: "hidden",
						},
					}}
				>
					{i.map((ima, index) => (
						<Box
							key={ima.src}
							onClick={() => {
								setSelected(ima);
							}}
							sx={{}}
						>
							<Image
								src={ima}
								alt="proyect example"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</Box>
					))}
				</Box>
			</Backdrop>
		</>
	);
};

export default ProyectCard;
