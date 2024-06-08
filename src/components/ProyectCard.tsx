import screen_example from "../assets/screen_example.jpg";
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProyectCard = () => {
	return (
		<Box
			sx={{
				display: "flex",
				borderLeft: "5px solid #A800FD",
				maxWidth: "900px",
				boxShadow: 2,
				borderRadius: 2,
				background: "#fffe",
				backdropFilter: "blur(3px)",
				overflow: "hidden",
				justifyContent: "space-between",
				mb: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					px: 3,
					py: 2,
					boxShadow: "1px 1px 5px black",
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
						mt: "auto",
						".MuiIconButton-root": {
							mr: 2,
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
			<img
				src={screen_example}
				alt="proyect example"
				style={{ width: "auto", height: "300px", objectFit: "contain" }}
			/>
		</Box>
	);
};

export default ProyectCard;
