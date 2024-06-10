import logo_color from "@/assets/logo_color.jpg";
import screen_example from "@/assets/screen_example.jpg";

const content = {
	nav: {
		logo: logo_color,
		brandName: "Zovalger",
	},

	main: {
		img: logo_color,
		shortDescrition: [
			"Hola, soy Germán Castro, un apasionado desarrollador web con más de dos años de experiencia en la creación de sitios y aplicaciones web. Originario de Venezuela, he tenido el privilegio de trabajar en varios proyectos que van desde páginas web informativas hasta grandes proyectos personales. Mi enfoque se centra en la implementación de tecnologías modernas y prácticas de desarrollo ágiles para ofrecer soluciones efectivas y atractivas. Estoy comprometido a seguir creciendo profesionalmente y aportar mi experiencia y habilidades a nuevos desafíos. ¡Bienvenido a mi portafolio!",
		],
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
