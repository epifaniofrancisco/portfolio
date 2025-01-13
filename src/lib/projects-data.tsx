import { ProjectDetails } from "@/lib/types";

import AngoCursos from "/public/images/projects/angocursos.png";
import GithubRepository from "/public/images/projects/github-random-repository.png";
import JogoDigitacao from "/public/images/projects/jogo-digitacao.png";
import NoTeuKubico from "/public/images/projects/no-teu-kubico.png";
import RocketNews from "/public/images/projects/rocketnews.png";
import TempoLeitura from "/public/images/projects/tempo-de-leitura.png";
import TransportOne from "/public/images/projects/transport-one.png";
import VerificadorBI from "/public/images/projects/verificador-bi.png";

export const PROJECTS: ProjectDetails[] = [
	{
		name: "Github Random Repository",
		description:
			"Este é um projeto que permite aos usuários buscar repositórios aleatórios no GitHub.",
		url: "https://github-random-repository-one.vercel.app/",
		previewImage: GithubRepository,
		technologies: [
			"HTML",
			"CSS",
			"JavaScript",
			"API Integration",
			"DOM Manipulation",
		],
	},
	{
		name: "Verificador de Bilhete de Identidade",
		description:
			"Este é um projeto Open-Source que permite as pessoas verificarem ou consultarem os seus dados do BI online com o seu número do bilhete.",
		url: "https://verificadorbiangola.vercel.app/",
		previewImage: VerificadorBI,
		technologies: ["HTML5", "JavaScript", "CSS3"],
	},
	{
		name: "Tempo de leitura",
		description:
			"Um simples contador de palavras e frases para analisar quanto tempo demorarias para ler um determinado texto.",
		url: "#none",
		previewImage: TempoLeitura,
		technologies: ["HTML5", "JavaScript", "Bootstrap", "CSS3"],
	},
	{
		name: "Jogo da digitação",
		description:
			"Este projeto é um jogo da digitação na web feito com Javascrit para verificar o quão rápido você é a digitar.",
		url: "https://epifaniofrancisco.github.io/jogo-digitacao-js/",
		previewImage: JogoDigitacao,
		technologies: ["HTML5", "JavaScript", "Bootstrap", "CSS3"],
	},
	{
		name: "No Teu Kubico",
		description:
			"Site para ajudar as pessoas a encontrar professores ao domicilio online",
		url: "https://www.noteukubico.com/",
		previewImage: NoTeuKubico,
		technologies: ["HTML5", "JavaScript", "Bootstrap", "CSS3", "PHP"],
	},
	{
		name: "Ango Cursos",
		description:
			"Um simples contador de palavras e frases para analisar quanto tempo demorarias para ler um determinado texto.",
		url: "https://angocursos.vercel.app/",
		previewImage: AngoCursos,
		technologies: ["HTML5", "JavaScript", "Bootstrap", "CSS3"],
	},
	{
		name: "Transport One",
		description: "Uma plataforma de aluguel de todo o tipo de transporte",
		url: "#none",
		previewImage: TransportOne,
		technologies: ["HTML5", "JavaScript", "Bootstrap", "CSS3"],
	},
	{
		name: "RocketNews",
		description:
			"Rocketnews é uma página para a captação de leads ou newsletter.",
		url: "https://rocketnews.vercel.app/",
		previewImage: RocketNews,
		technologies: ["HTML5", "JavaScript", "Bootstrap", "CSS3", "PHP"],
	},
];
