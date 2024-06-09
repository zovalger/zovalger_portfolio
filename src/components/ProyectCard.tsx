import screen_example from "../assets/screen_example.jpg";
import { Box, Typography, Chip, useMediaQuery, useTheme } from "@mui/material";

const ProyectCard = () => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
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
				<img
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
	);
};

export default ProyectCard;
