import logo_color from "@/assets/logo_color.jpg";
import proyects from "./proyects";

const content = {
	nav: {
		logo: logo_color,
		brandName: "Zovalger",
	},

	main: {
		img: logo_color,
		shortDescrition: [
			"Hola, soy Germán Castro, un apasionado desarrollador web, especializado en el stack MERN con más de dos años de experiencia en la creación de sitios y aplicaciones web. He tenido el privilegio de trabajar en varios proyectos que van desde páginas web informativas hasta grandes proyectos personales, en los cuales he logrado adquirir conocimientos tanto de frontend como de backend.",
		],
	},

	proyects,

	moreAbout: {
		description: [
			"Me gradué en la UNERG como ingeniero en informática. Durante el transcurso de esta carrera pude desarrollar varios sitios y aplicaciones web, en donde logré obtener conocimientos sobre servidores de API REST, bases de datos MongoDB y MySQL como también en su variante SQLite. al mismo tiempo maneje dichas bases de datos con ORMs como sequelize y mongoose. Gracias a mis pasantías logre tener la experiencia de tratar con clientes, y llevar sus requerimientos hacia una aplicación web que facilitara las tareas requeridas.",
			"En cuanto al desarrollo frontend, siempre llevo en la mente la experiencia del usuario para darle el máximo feedback posible de lo que está sucediendo en la aplicación web, además intento otorgar una interfaz intuitiva y estandarizada para que las operaciones que necesite realizar el usuario sean fácilmente localizables y por ende logre completar su objetivo.",
		],
		photo: logo_color,
	},
};

export default content;
