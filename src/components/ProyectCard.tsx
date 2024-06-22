"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Tooltip } from "@mui/material";
import { proyectData } from "@/content/proyects";

interface props {
	data: proyectData;
}

const ProyectCard = ({ data }: props) => {
	const {
		title,
		description,
		shortDescription,
		githubLinks,
		siteLink,
		technologys,
		imgs,
	} = data;

	const [imgSelected, setImgSelected] = useState<number>(0);

	const [openBackdrop, setOpenBackdrop] = useState(false);
	const handleClose = () => {
		setOpenBackdrop(false);
	};
	const handleOpen = () => {
		setOpenBackdrop(true);
	};

	const nextImage = () => {
		const newNumber = imgSelected >= imgs.length - 1 ? 0 : imgSelected + 1;

		setImgSelected(newNumber);
	};

	const lastImage = () => {
		const newNumber = imgSelected <= 0 ? imgs.length - 1 : imgSelected - 1;

		setImgSelected(newNumber);
	};

	const selectImagen = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (selectImagen.current) selectImagen.current.scrollIntoView();
	}, [imgSelected && selectImagen.current]);

	return (
		<>
			<Box
				onClick={handleOpen}
				sx={{
					display: "flex",
					flexDirection: "column",
					borderLeft: "5px solid #A800FD",
					maxWidth: { xs: "100%", sm: "900px" },
					boxShadow: 2,
					borderRadius: 2,
					background: "#fff6",
					backdropFilter: "blur(3px)",
					overflow: "hidden",
					justifyContent: "space-between",
					mb: 2,
					transition: "boxShadow 100ms",
					":hover": { boxShadow: 6 },
				}}
			>
				<Box
					sx={{
						px: 3,
						py: 4,
						order: 1, //{ xs: 1, sm: 0 },
					}}
				>
					<Typography sx={{ fontWeight: 600, mb: 1 }} variant="h5">
						{title}
					</Typography>

					{shortDescription.map((text, index) => (
						<Typography key={index}>{text}</Typography>
					))}

					<Box
						sx={{
							my: 1,
							".MuiButton-root": {
								mr: 1,
							},
							// ".MuiSvgIcon-root": { mr: 1 },
						}}
					>
						<Tooltip title="Repositorio">
							<Button
								variant="outlined"
								onClick={(e) => e.stopPropagation()}
								href={githubLinks[0]}
								target="_BLANK"
							>
								<GitHubIcon />
							</Button>
						</Tooltip>

						{!!siteLink?.length && (
							<Tooltip title="Web APP">
								<Button
									variant="outlined"
									onClick={(e) => e.stopPropagation()}
									href={siteLink[0]}
									target="_BLANK"
								>
									<OpenInBrowserIcon />
								</Button>
							</Tooltip>
						)}
					</Box>

					<Box
						sx={{
							mt: 2,
							display: "flex",
							flexWrap: "wrap",
							width: "100%",
							".MuiIconButton-root": {
								mr: 2,
							},
						}}
					>
						{technologys.map((text, index) => (
							<Chip
								sx={{ mr: 0.5, mb: 1 }}
								key={index}
								label={text}
								color="primary"
								variant="outlined"
								size="small"
							/>
						))}
					</Box>
				</Box>
				<Box sx={{ minWidth: "50%" }}>
					<Image
						src={imgs[0]}
						width={512}
						alt="proyect example"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
							boxShadow: "1px 1px 4px #0004",
						}}
					/>
				</Box>
			</Box>

			{/*  ************************* visor de imagenes ************************* */}

			{openBackdrop && (
				<Backdrop
					sx={{
						color: "#fff",
						zIndex: (theme) => theme.zIndex.drawer + 1,
						// position: "relative",
					}}
					open={openBackdrop}
					onClick={handleClose}
				>
					<Box
						sx={{
							position: "relative",
							display: "flex",
							flexDirection: "column",
							height: "100%",
							maxHeight: "99vh",
							width: "100%",
						}}
					>
						{/* close */}
						<Box
							sx={{
								pr: 1,
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<IconButton
								sx={{
									color: "#fff",
								}}
							>
								<CloseIcon />
							</IconButton>
						</Box>

						{/* imagenes */}
						<Box
							sx={{
								position: "relative",
								flexGrow: 1,
								flexShrink: 1,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									height: "75vh",
								}}
							>
								<Image
									onClick={(e) => e.stopPropagation()}
									src={imgs[imgSelected]}
									alt="proyect example"
									width={900}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
								/>
							</Box>

							<Box
								onClick={(e) => {
									e.stopPropagation();
									lastImage();
								}}
								sx={{
									position: "absolute",
									left: 0,
									width: "50%",
									height: "100%",
									display: "flex",
									alignItems: "center",
									p: 2,
									background: "#fff0",
									":hover": {
										background: "linear-gradient(90deg, #0003 0%, #0000 100%)",
									},
								}}
							>
								<ChevronLeftIcon
									sx={{
										color: "#000",
										filter: "drop-shadow(1px 1px 6px #000)",
									}}
								/>
							</Box>
							<Box
								onClick={(e) => {
									e.stopPropagation();
									nextImage();
								}}
								sx={{
									position: "absolute",
									right: 0,
									width: "50%",
									height: "100%",

									display: "flex",
									alignItems: "center",
									justifyContent: "flex-end",
									p: 2,
									background: "#fff0",
									":hover": {
										background: "linear-gradient(-90deg, #0003 0%, #0000 100%)",
									},
								}}
							>
								<ChevronRightIcon
									sx={{
										color: "#000",
										filter: "drop-shadow(1px 1px 6px #000)",
									}}
								/>
							</Box>
						</Box>

						{/* miniaturas */}
						<Box
							onClick={(e) => e.stopPropagation()}
							sx={{
								position: "relative",
								px: 2,
								py: 1,
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
							{imgs.map((img, index) => (
								<Box
									key={index}
									ref={imgSelected == index ? selectImagen : null}
									onClick={() => {
										setImgSelected(index);
									}}
									sx={{
										transition: "outline 150ms",
										outline:
											imgSelected == index ? "2px solid #A800FD" : "none",
									}}
								>
									<Image
										src={img}
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
					</Box>
				</Backdrop>
			)}
		</>
	);
};

export default ProyectCard;
