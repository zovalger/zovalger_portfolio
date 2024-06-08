import reactIcon from "./assets/logosSoftware/ReactIcon.png";
import nextIcon from "./assets/logosSoftware/next.png";
import javacriptIcon from "./assets/logosSoftware/javacript.png";
import typescriptIcon from "./assets/logosSoftware/typescript.png";
import gitIcon from "./assets/logosSoftware/git.png";
import githubIcon from "./assets/logosSoftware/github.png";
import nodeIcon from "./assets/logosSoftware/node.png";
import mysqlIcon from "./assets/logosSoftware/mysql_logo.png";
import mongoDBIcon from "./assets/logosSoftware/mongoDB_Icon.png";

import logo_color from "./assets/logo_color.jpg";
import garritauwu from "./assets/garra.png";
import garritauwu2 from "./assets/garra_mirror.png";
import logo_trasparent from "./assets/logo_trasparent.png";
import {
	Box,
	Button,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import ProyectCard from "./components/ProyectCard";
import Rombo from "./components/Rombo";
import InfinityHorizontalScroll from "./components/InfinityHorizontalScroll";

function App() {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					// height: "100vh",
					maxHeight: "1080px",
					minHeight: "500px",
					px: 2,
					pt: 10,
					pb: 8,
					backgroundImage: `url(${logo_trasparent});`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
			>
				<Grid container spacing={5} sx={{ maxWidth: "900px" }}>
					<Grid xs={12} sm={6} sx={{ order: { xs: 1, sm: 0 } }}>
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
								display: "flex",
								justifyContent: { xs: "space-evenly", sm: "flex-start" },
								my: 2,
								".MuiIconButton-root": {
									mr: 1,
									".MuiSvgIcon-root": { color: "#000" },
								},
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
						<Box
							sx={{
								display: "flex",
								justifyContent: { xs: "center", sm: "flex-start" },
								mt: 1,
							}}
						>
							<Button
								color="primary"
								variant="outlined"
								sx={{ textTransform: "none" }}
							>
								Descargar CV
							</Button>
						</Box>
					</Grid>
					<Grid
						xs={12}
						sm={6}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Box
							sx={{
								background: "red",
								width: 300,
								height: 300,
								borderRadius: "50%",
							}}
						>
							{/* <img
							src={logo_color}
							alt="logo zovalger"
							style={{ width: "100%", height: "100%", objectFit: "contain" }}
						/> */}
						</Box>
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
					// flexDirection: "column",
					px: 2,
					py: 8,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						backgroundImage: `url(${garritauwu2});`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "250px",
						backgroundPosition: "100% 70%",
						maxWidth: "900px",
					}}
				>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2rem", sm: "3.75rem" } }}
					>
						Conocimientos
					</Typography>

					{isMd ? (
						<>
							{" "}
							<Box sx={{ display: "flex", mt: 8 }}>
								<Rombo icon={reactIcon} />
								<Rombo icon={nextIcon} p={1} />
							</Box>
							<Box sx={{ display: "flex" }}>
								<Rombo icon={javacriptIcon} p={3.5} />
							</Box>
							<Box sx={{ display: "flex" }}>
								<Rombo icon={typescriptIcon} p={3.5} />
								<Rombo icon={gitIcon} p={2.5} />
							</Box>
							<Box sx={{ display: "flex" }}>
								<Rombo icon={githubIcon} />
							</Box>
							<Box sx={{ display: "flex" }}>
								<Rombo icon={nodeIcon} p={1.5} />
								<Rombo icon={mysqlIcon} p={1.5} />
							</Box>
							<Box sx={{ display: "flex", mb: 5 }}>
								<Rombo icon={mongoDBIcon} p={1.5} />
							</Box>
						</>
					) : (
						<>
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
							<Box sx={{ display: "flex", mb: 5 }}>
								<Rombo icon={mysqlIcon} p={1.5} />
								<Rombo icon={mongoDBIcon} p={1.5} />
							</Box>
						</>
					)}

					<Box sx={{ my: 5 }}>
						<InfinityHorizontalScroll />
					</Box>
				</Box>
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
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						backgroundImage: `url(${garritauwu});`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "250px",
						backgroundPosition: "0% 0%",
						maxWidth: "900px",
					}}
				>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2rem", sm: "3.75rem" } }}
					>
						Proyectos
					</Typography>

					<ProyectCard />
					<ProyectCard />
					<ProyectCard />
					<ProyectCard />
				</Box>
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
