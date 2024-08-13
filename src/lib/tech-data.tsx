import { TechDetails } from "@/lib/types";

import LogoC from "/public/images/logos/icon-c.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoFlutter from "/public/images/logos/icon-flutter.svg";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoPython from "/public/images/logos/icon-python.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";

export const TECHNOLOGIES: TechDetails[] = [
	{
		label: "Javascript",
		logo: LogoJavascript,
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		label: "Typescript",
		logo: LogoTypescript,
		url: "https://www.typescriptlang.org/",
	},
	{
		label: "React",
		logo: LogoReact,
		url: "https://react.dev/",
	},
	{
		label: "Next.js",
		logo: LogoNextjs,
		url: "https://nextjs.org/",
	},
	{
		label: "Node.js",
		logo: LogoNodejs,
		url: "https://nodejs.org/en",
	},
	{
		label: "Python",
		logo: LogoPython,
		url: "https://expressjs.com/",
	},
	{
		label: "C",
		logo: LogoC,
		url: "https://nestjs.com/",
	},
	{
		label: "Flutter",
		logo: LogoFlutter,
		url: "https://www.postgresql.org/",
	},
	{
		label: "Sass/Scss",
		logo: LogoSass,
		url: "https://sass-lang.com/",
	},
	{
		label: "Tailwindcss",
		logo: LogoTailwindcss,
		url: "https://tailwindcss.com/",
	},
	{
		label: "Figma",
		logo: LogoFigma,
		url: "https://www.figma.com/",
	},
	{
		label: "Git",
		logo: LogoGit,
		url: "https://git-scm.com/",
	},
];
