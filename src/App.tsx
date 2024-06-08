import logo_color from "./assets/logo_color.jpg";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Learn from "./components/Learn";
import ProyectCard from "./components/ProyectCard";

function App() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					maxHeight: "1080px",
					minHeight: "500px",
					px: 2,
				}}
			>
				<Grid container spacing={2} sx={{ maxWidth: "900px" }}>
					<Grid xs={12} sm={6}>
						<Typography sx={{ fontSize: 60, fontWeight: 600 }}>
							<Typography
								sx={{ fontSize: 60, fontWeight: 600, color: "#A800FD" }}
								component={"span"}
							>
								Frontend{" "}
							</Typography>
							Developer
						</Typography>

						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
							deserunt tenetur ab quae incidunt accusamus, dignissimos expedita!
							Nostrum quisquam ipsum delectus voluptatum, deserunt tempora unde
							facere deleniti culpa, recusandae laborum!
						</Typography>

						<Box
							sx={{
								".MuiIconButton-root": {
									mr: 1,
									".MuiSvgIcon-root": { color: "#000" },
								},
								display: "flex",

								my: 2,
							}}
						>
							<IconButton href="https://github.com/zovalger" target="blank">
								<GitHubIcon />
							</IconButton>
							<IconButton
								href="https://www.linkedin.com/in/zovalger/"
								target="blank"
							>
								<LinkedInIcon />
							</IconButton>
							<IconButton href="https://t.me/zovalger" target="blank">
								<TelegramIcon />
							</IconButton>
						</Box>
						<Box sx={{ mt: 1 }}>
							<Button
								color="primary"
								variant="outlined"
								sx={{ textTransform: "none" }}
							>
								Descargar CV
							</Button>
						</Box>
					</Grid>
					<Grid xs={12} sm={6}>
						<img
							src={logo_color}
							alt="logo zovalger"
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
						/>
					</Grid>
				</Grid>
			</Box>

			{/* *****************************************************
	 															conocimientos
			*****************************************************	*/}

			<Box
				sx={{
					background: "#F4F4F4",
					maxHeight: "1080px",
					minHeight: "500px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					px: 2,
					py: 8,
				}}
			>
				<Learn />
			</Box>

			{/* *****************************************************
	 															proyectos
			*****************************************************	*/}

			<Box
				sx={{
					minHeight: "500px",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					px: 2,
					py: 8,
				}}
			>
				<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
					Proyectos
				</Typography>

				<ProyectCard />
				<ProyectCard />
				<ProyectCard />
				<ProyectCard />
			</Box>

			{/* *****************************************************
	 															navbar
			*****************************************************	*/}

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
						maxWidth: "900px",
						display: "flex",
						justifyContent: "space-between",
						px: 2,
						py: 1,
						width: "100%",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Box sx={{ width: 50, height: 50, mr: 1 }}>
							<img
								src={logo_color}
								alt="logo zovalger"
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
						</Box>

						<Typography sx={{ fontSize: 20 }}>zovalger</Typography>
					</Box>

					<Box>
						<IconButton>
							<MenuIcon />
						</IconButton>
					</Box>

					{/* <Box>
					<Button> herramientas </Button>
					<Button> Proyectos </Button>
				</Box> */}
				</Box>
			</Box>
		</>
	);
}

export default App;
