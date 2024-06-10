import logo_color from "@/assets/logo_color.jpg";
import screen_example from "@/assets/screen_example.jpg";

const content = {
	nav: {
		logo: logo_color,
		brandName: "Zovalger",
	},

	main: {
		img: logo_color,
		shortDescrition: ["hola"],
	},

	proyects: [
		{
			title: "proyecto",
			description: ["es un proyecto super way"],
			technologys: ["muchas", "cosas", ":3"],
			imgs: [screen_example, screen_example],
		},
	],

	moreAbout: {
		description: ["me gutan los perritos :3"],
		photo: logo_color,
	},
};

export default content;
