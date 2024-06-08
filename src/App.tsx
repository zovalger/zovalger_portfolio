import logo_color from "./assets/logo_color.jpg";
import { Box, Button, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Learn from "./components/Learn";

function App() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					px: 2,
					py: 8,
				}}
			>
				<Box sx={{ order: { xs: 1, sm: -1 } }}>
					<Typography sx={{ fontSize: 54, fontWeight: 600 }}>
						<Typography
							sx={{ fontSize: 54, fontWeight: 600, color: "#A800FD" }}
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
								// ".MuiSvgIcon-root": { color: "#000" },
							},
							display: "flex",
							justifyContent: "space-evenly",
							my: 2,
						}}
					>
						<IconButton>
							<GitHubIcon />
						</IconButton>
						<IconButton>
							<LinkedInIcon />
						</IconButton>
						<IconButton>
							<TelegramIcon />
						</IconButton>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
						<Button variant="contained">Contactame</Button>
						<Button variant="outlined"> Curriculum</Button>
					</Box>
				</Box>

				<Box sx={{ maxHeight: "45vh", my: 2 }}>
					<img
						src={logo_color}
						alt="logo zovalger"
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
					/>
				</Box>
			</Box>


			{/* *****************************************************
	 															conocimientos
			*****************************************************	*/}

			<Box
				sx={{
					background: "#F4F4F4",
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection:"column"
				}}
			>
				<Learn />
			</Box>

			{/* *****************************************************
	 															proyectos
			*****************************************************	*/}

			<Box sx={{ minHeight: "100vh", py: 8, px: 2 }}>
				<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
					Proyectos
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column" },
						boxShadow: 1,
						borderRadius: 2,
						background: "#fffe",
						backdropFilter: "blur(3px)",
						overflow: "hidden",
						mt: 2,
					}}
				>
					<Box sx={{}}>
						<img
							src={logo_color}
							alt="logo zovalger"
							style={{ width: "100%", height: "auto", objectFit: "contain" }}
						/>
					</Box>

					<Box sx={{ px: 2, py: 1 }}>
						<Box sx={{}}>
							<Typography sx={{ fontWeight: 600, mb: 1 }}>
								{" "}
								UNERG TGS
							</Typography>
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								deserunt tenetur ab quae incidunt accusamus, dignissimos
								expedita!
							</Typography>
						</Box>

						<Box
							sx={{
								display: "flex",
								".MuiIconButton-root": {
									mt: 1,
									mr: 2,
									// ".MuiSvgIcon-root": { color: "#000" },
								},
							}}
						>
							<IconButton>
								<GitHubIcon />
							</IconButton>
							<IconButton>
								<GitHubIcon />
							</IconButton>
							<IconButton>
								<GitHubIcon />
							</IconButton>
							<IconButton>
								<GitHubIcon />
							</IconButton>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* *****************************************************
	 															herramientas
			*****************************************************	*/}

			<Box sx={{ background: "#f6f1ff", minHeight: "100vh", py: 8, px: 2 }}>
				<Typography variant="h2" textAlign="center" sx={{ mb: 4 }}>
					Tecnologías
				</Typography>

				<Box sx={{}}>
					<Box
						sx={{
							position: "relative",
							":before": {
								content: `""`,
								position: "absolute",
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								background: "#green",
								transform: "scale(1.5)",
							},
						}}
					>
						<Box sx={{ width: 50, height: 50, mr: 1 }}>
							<img
								src={logo_color}
								alt="logo zovalger"
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
						</Box>
					</Box>
				</Box>
			</Box>

			{/* *****************************************************
	 															navbar
			*****************************************************	*/}

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					px: 2,
					py: 1,
					position: "fixed",
					top: 0,
					width: "100%",
					background: "#fffe",
					backdropFilter: "blur(3px)",
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

				<IconButton>
					<MenuIcon />
				</IconButton>
				{/* <Box>
					<Button> herramientas </Button>
					<Button> Proyectos </Button>
				</Box> */}
			</Box>
		</>
	);
}

export default App;
