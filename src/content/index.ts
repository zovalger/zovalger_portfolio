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
			title: "Jeanger",
			description: [
				"Proyecto Full Stack MERN destinado principalmente para la empresa Inversiones Jeanger, que les proporciona múltiples herramientas para la búsqueda y facturación de productos, cronómetros para gestión de tareas que a su vez están sincronizados entre todas las instancias de la interfaz, además de proporcionarle un inventario que da una visión general de todos los productos.",
				"El cliente y el servidor son dos servidores separados comunicados por una  API REST ",
			],
			githubLinks: [
				"https://github.com/zovalger/JEANGER-APP",
				"https://github.com/zovalger/JEANGER-APP-SERVER",
			],
			siteLink: ["https://jeanger.vercel.app/"],
			technologys: [
				"React",
				"Material UI",
				"Redux",
				"Axios",
				"Moment",
				"Formik",
				"Socket.IO",
				"Yup",
				"Express ",
				"JWT",
				"Mongoose",
				"Cheerio",
				"Cloudinary",
				"Node-Cron",
				"MongoDB",
			],
			imgs: [screen_example, screen_example],
		},
	],

	moreAbout: {
		description: ["me gutan los perritos :3"],
		photo: logo_color,
	},
};

export default content;
