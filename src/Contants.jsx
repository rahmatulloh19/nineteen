import { Bookmark, Insure, Manage } from "./assets/images";

export const Projects_list = [
	{
		id: 1,
		title: "Manage",
		desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5 for the structure of the site, Less for pixel-perfect, and JavaScript for opening and closing menus. For interactivity, used some libraries. They are AOS Slick.JS",
		Img: (props) => <Manage {...props} />,
	},
	{
		id: 2,
		title: "Bookmark",
		desc: "Implementing responsive design principles along with tools like TailwindCSS and Slick.JS can greatly enhance the user experience on websites, especially when incorporating features such as accordions and leveraging UI frameworks like Daisy UI.",
		Img: (props) => <Bookmark {...props} />,
	},
	{
		id: 3,
		title: "Insure",
		desc: "By utilizing responsive design techniques and SASS/SCSS for streamlined styling, websites can seamlessly adapt to various screen sizes while maintaining consistency in design elements and decorations, including the integration of high-resolution Retina images for enhanced visual appeal.",
		Img: (props) => <Insure {...props} />,
	},
];
