import { Github, Twitter, Figma } from "lucide-react";

import LogoSafeq from "/public/images/logos/logo-safeq.svg";
import LogoZafir from "/public/images/logos/logo-zafir.svg";
import LogoFreelancer from "/public/images/logos/logo-freelancer.svg";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
	ExperienceDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
	GITHUB: "https://github.com/shahsagarm",
	TWITTER: "https://twitter.com/shahsagarm",
	FIGMA: "https://www.figma.com/@shahsagarm",
	FIGMA_FILE:
		"https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
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
		icon: Twitter,
		url: "https://twitter.com/shahsagarm",
	},
	{
		icon: Figma,
		url: "https://www.figma.com/@shahsagarm",
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
];
