const INFO = {
	main: {
		title: "Project Portfolio by Kylee",
		name: "Kylee Dyck",
		email: "kyleetd@gmail.com",
		logo: "/project-portfolio/caty.png",
	},

	socials: {
		github: "https://github.com/Kyleetd",
		linkedin: "https://www.linkedin.com/in/kyleedyck/",
		stackoverflow: "https://stackoverflow.com/",
	},

	homepage: {
		title: "Hi, I'm Kylee. I am a Computer Science student at UBC.",
		description:
			"So far, I have a bit of experience in both front- and back-end development. Namely, I have built several applications using HTML + CSS + Javascript. Lately, I have been learning React, which I enjoy. I have mostly used Python for database and API-related work. I am still looking to develop my niche, so I'm excited to discover new frameworks and languages. To add a sprinkle of personality, I love reading and currently I am loving the Dune series as well as Surface Detail.",
	},

	projects: [
		{
			title: "Snake Game",
			description:
				"In this course project, I re-created the classic Snake & Apple game for CPSC 210, Software Construction, using the Model-View-Controller framework",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Kyleetd/Snake-Game/tree/main",
		},

		{
			title: "Fitness Tracker Database",
			description:
				"In this project I used a relational database to store, query, and manipulate data associated with peoples' fitness regimes. It was built from the perspective of a personal trainer tracking client data.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/php/php.png",
			linkText: "View Project",
			link: "https://github.com/Kyleetd/cpsc304-relational-database-project",
		},

		{
			title: "Path Finding Algorithm Visualizer",
			description:
				"This React + Typescript application that allows the user to select a start and end point as well as walls. The user can then select BFS, DFS, and or Best FS to run.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://kyleetd.github.io/path-finding-visualizer/",
		},

		{
			title: "Book Tracker Database",
			description:
				"Functionalities include add, delete, and modify books. The API was built with Python and the front-end was built with Typescript + React. I used a Docker container to activate the poetry environment and start uvicorn and another to start the React environment",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/Kyleetd/books-to-read",
		},

		{
			title: "Drop-N",
			description:
				"A database tracking leagues and players for a local volley ball organization. The backend was created with Python's SQLAlchemy ORM and FastAPI framework. The frontend was created with React's MUI library.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/Kyleetd/Drop-N",
		},
	],
};

export default INFO;
