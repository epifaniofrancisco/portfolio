import { Github, Linkedin } from "lucide-react";

import LogoSafeq from "/public/images/logos/logo-safeq.svg";
import LogoZafir from "/public/images/logos/logo-zafir.svg";
import LogoFreelancer from "/public/images/logos/logo-freelancer.svg";

import {
	ExperienceDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
	GITHUB: "https://github.com/epifaniofrancisco",
	LINKEDIN: "https://www.linkedin.com/in/epifaniofrancisco/",
};

export const NAV_LINKS = [
	{
		label: "Sobre",
		href: "#about",
	},
	{
		label: "Experiência",
		href: "#experience",
	},
	{
		label: "Projetos",
		href: "#work",
	},
	{
		label: "Contactos",
		href: "#contact",
	},
];

export const SOCIAL_LINKS = [
	{
		icon: Github,
		url: "https://github.com/shahsagarm",
	},
	{
		icon: Linkedin,
		url: "https://www.linkedin.com/in/epifaniofrancisco/",
	},
];

export const EXPERIENCES: ExperienceDetails[] = [
	{
		logo: LogoSafeq,
		logoAlt: "Safeq logo",
		position: "Desenvolvedor de Software",
		startDate: new Date(2022, 10),
		currentlyWorkHere: true,
		summary: [
			"Aperfeiçoamento e manutenção do website da empresa e de clientes.",
			"Criação, organização e aplicação de guias de estilo e padrões de codificação.",
			"Desenvolvimento de aplicações móveis para clientes, utilizando Flutter.",
			"Implementação de ferramentas internas para otimização da gestão de projetos e rastreio de atividades.",
		],
	},
	{
		logo: LogoFreelancer,
		logoAlt: "Freelancer logo",
		position: "Freelancer",
		startDate: new Date(2021, 1),
		currentlyWorkHere: true,
		summary: [
			"Desenvolvimento de websites e aplicações web para empresas como Freelancer.",
			"Apoio na construção e lançamento do primeiro website de empresas no mercado, bem como na melhoria do design de sites já existentes.",
			"Criação de novas interfaces visuais utilizando ferramentas de design e prototipagem para otimizar a experiência do utilizador em websites.",
		],
	},
	{
		logo: LogoZafir,
		logoAlt: "Zafir Tecnologia logo",
		position: "Desenvolvedor de Software -  Estagiario",
		startDate: new Date(2023, 4),
		endDate: new Date(2023, 9),
		summary: [
			"Desenvolvimento de aplicações full stack, abrangendo frontend e backend conforme as necessidades de cada projeto.",
			"Construção de interfaces interativas e responsivas utilizando Nuxt3, Vue.js e TypeScript no frontend.",
			"Desenvolvimento da lógica e infraestrutura das aplicações no backend, utilizando TypeScript e JavaScript.",
		],
	},
];
