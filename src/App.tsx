import logo_color from "./assets/logo_color.jpg";
import { Box, Button, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

function App() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					px: 2,
					py: 1,
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

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					px: 2,
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

				<Box sx={{ background: "red",maxHeight:"50vh"}}>foto</Box>
			</Box>

			{/* proyectos */}

			<Typography>Proyectos</Typography>

			<Box sx={{ display: "flex" }}>
				<Box>
					<Typography>titulo</Typography>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
						deserunt tenetur ab quae incidunt accusamus, dignissimos expedita!
					</Typography>
				</Box>

				<Box>imgane proyecto</Box>

				<Box sx={{ display: "flex" }}>
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

			{/* herramientas */}

			<Typography>Tecnologías</Typography>

			<Box sx={{ display: "flex" }}>
				<Box sx={{ position: "relative", ":before": {} }}>
					<Box>imagen</Box>
				</Box>
			</Box>
		</>
	);
}

export default App;
