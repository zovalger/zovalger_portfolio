import { Box } from "@mui/material";



interface props {
	icon: string;
	p?: string | number;
}

const Rombo = ({ icon, p = 3 }: props) => {
	return (
		<Box
			sx={{
				position: "relative",
				width: 110,
				height: 110,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				p,
				filter: "drop-shadow(1px 1px 4px #0003)",
				mx: 4,
				":before": {
					content: `""`,
					position: "absolute",
					background: "#fff",
					height: "100%",
					width: "100%",
					rotate: "45deg",
					borderRadius: 2,
				},
				img: { objectFit: "contain", position: "relative" },
			}}
		>
			<img src={icon} alt="software Icon" />
		</Box>
	);
};

export default Rombo;
