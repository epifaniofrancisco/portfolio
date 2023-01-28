import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BtnPrimary from "../components/buttons/BtnPrimary";
import BtnPrimaryIconDownload from "../components/buttons/BtnPrimaryIconDownload";
import InputLabelAnimation from "../components/inputs/InputLabelAnimation";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProjectCard from "../components/layout/ProjectCard";
import Technologies from "../components/layout/Technologies";
import TypeWriter from "../components/TypeWritter";

// Images
import noTeuKubicoImage from "/src/assets/img/projects/no-teu-kubico.png"
import verificadorBiImage from "/src/assets/img/projects/verificador-bi.png"
import rocketnewsImage from "/src/assets/img/projects/rocketnews.png"
import lojaOnlineImage from "/src/assets/img/projects/online-shop.png"
import transportOneImage from "/src/assets/img/projects/transport-one.png"
import bibliotecaLuandaImage from "/src/assets/img/projects/biblioteca-luanda.png"
import colegioMImage from "/src/assets/img/projects/colegio-m.png"
import jogoDigitacaoImage from "/src/assets/img/projects/jogo-digitacao.png"
import tempoLeituraImage from "/src/assets/img/projects/tempo-de-leitura.png"
import contactMeImage from "/src/assets/img/cross-platform-software-pana.svg"
import introductionImage from "/src/assets/img/code-typing-bro.svg"

// PDF
import meuCV from "/src/assets/pdf/meu-cv.pdf"

const words = ["Epifânio Francisco", "Desenvolvedor FrontEnd"];

const projectsItem = [
	{
		id: 1,
		title: "No Teu Kubico",
		demo: "https://www.noteukubico.com/",
		github: "https://projetoprivado",
		image: noTeuKubicoImage,
		alt: "No teu kubico inicio",
	},
	{
		id: 2,
		title: "Verificador de BI",
		demo: "https://verificadorbiangola.vercel.app/",
		github: "https://github.com/epifaniofrancisco/verificador-de-bi",
		image: verificadorBiImage,
		alt: "Verificador de BI",
	},
	{
		id: 3,
		title: "RocketNews",
		demo: "https://rocketnews.vercel.app/",
		github: "https://github.com/epifaniofrancisco/rocketnews",
		image: rocketnewsImage,
		alt: "Rocketnews",
	},
	{
		id: 4,
		title: "Loja Online",
		demo: "https://online-shop-react-gules.vercel.app/",
		github: "https://github.com/epifaniofrancisco/online-shop-react",
		image: lojaOnlineImage,
		alt: "Loja Online",
	},
	{
		id: 5,
		title: "Transport One",
		demo: "http://transport-one.vercel.app/",
		github: "https://projetoprivado",
		image: transportOneImage,
		alt: "Transport One",
	},
	{
		id: 6,
		title: "Biblioteca de Luanda",
		demo: "https://epifaniofrancisco.github.io/biblioteca-luanda/",
		github: "https://github.com/epifaniofrancisco/biblioteca-luanda",
		image: bibliotecaLuandaImage,
		alt: "Biblioteca de Luanda",
	},
	{
		id: 7,
		title: "Colégio M",
		demo: "http://colegio-m.vercel.app/",
		github: "https://github.com/epifaniofrancisco/colegio-m",
		image: colegioMImage,
		alt: "Colégio M",
	},
	{
		id: 8,
		title: "Jogo da Digitação",
		demo: "https://epifaniofrancisco.github.io/jogo-digitacao-js/",
		github: "https://github.com/epifaniofrancisco/jogo-digitacao-js",
		image: jogoDigitacaoImage,
		alt: "Jogo da digitação",
	},
	{
		id: 9,
		title: "Tempo de Leitura",
		demo: "https://epifaniofrancisco.github.io/tempo-de-leitura/",
		github: "https://github.com/epifaniofrancisco/tempo-de-leitura",
		image: tempoLeituraImage,
		alt: "Tempo de leitura",
	},
];

function activeWhileScroll() {
	$(window)
		.scroll(function () {
			var windscroll = $(window).scrollTop();
			if (windscroll >= 100) {
				$("section").each(function (i) {
					// The number at the end of the next line is how pany pixels you from the top you want it to activate.
					if ($(this).position().top <= windscroll - 0) {
						$(".nav-link.active").removeClass("active");
						$(".nav-link").eq(i).addClass("active");
					}
				});
			} else {
				$(".nav-link.active").removeClass("active");
				$(".nav-link:first").addClass("active");
			}
		})
		.scroll();
}

activeWhileScroll();

function AboutMe() {
	return (
		<section id="about-me">
			<Container className="about-me my-5 p-lg-0">
				<Row className="align-items-center">
					<Col md={6}>
						<h1>Saiba mais sobre mim</h1>
						<p className="my-5 text-about-me-description">
							Sou o Epifânio, desenvolvedor com maior foco em
							desenvolvimento Front End. Atualmente trabalho como
							freelancer com projetos de tamanho pequeno, médio e
							grande porte. Gosto de estar sempre aprendendo
							coisas novas e continuar subindo cada dia mais, rumo
							ao espaço.
						</p>

						<BtnPrimaryIconDownload
							link={meuCV}
							text="Baixar currículo"
							iconName="download-outline"
						/>
					</Col>
					<Col md={6}>
						<div className="technologies">
							<Technologies />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

function ProjectsList() {
	return projectsItem.map((project) => (
		<ProjectCard
			id={project.id}
			title={project.title}
			previewLink={project.demo}
			github={project.github}
			image={project.image}
			alt={project.alt}
		/>
	));
}

function ContactMe() {
	return (
		<section id="contact-me" className="my-5 contact-me">
			<Container>
				<Row className="justify-content-between">
					<Col md={6} className="col-md-5">
						<h4>Vamos construir o seu projeto.</h4>
					</Col>
					<Col md={4} className="col-md-4">
						<p>
							“Você pode criar qualquer coisa: basta escrever” –
							C. S. Lewis
						</p>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col md={7}>
						<div className="w-100 h-100">
							<img
								src={contactMeImage}
								alt="Cross platform software"
								className="img-fluid"
							/>
						</div>
					</Col>
					<Col md={5}>
						<form className="ms-5 needs-validation" novalidate>
							<Row>
								<InputLabelAnimation
									type="text"
									name="name"
									label="Nome"
								/>
							</Row>
							<Row>
								<InputLabelAnimation
									type="email"
									name="email"
									label="Email"
								/>
							</Row>
							<Row>
								<InputLabelAnimation
									type="tel"
									name="phone"
									label="Telefone"
								/>
							</Row>
							<Row>
								<InputLabelAnimation
									type="text"
									name="topic"
									label="Assunto"
								/>
							</Row>
							<Row>
								<Row className="my-input-group">
									<textarea
										name="message"
										cols="30"
										rows="10"
									></textarea>
									<label for="message" className="label-name">
										<span className="content-name">
											Mensagem
										</span>
									</label>
								</Row>
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

function Projects() {
	return (
		<section id="projects" className="p-lg-0 projects">
			<Container>
				<h2 className="text-center">Projetos</h2>

				<Row className="p-lg-0 mt-5 justify-content-between">
					<ProjectsList />
				</Row>
			</Container>
		</section>
	);
}

function Introduction() {
	return (
		<section id="home">
			<Container className="about-me my-5 p-lg-0">
				<Row className="align-items-center">
					<Col md={6}>
						<h1 className="mb-5">
							Olá, Eu sou
							<TypeWriter words={words} />
							<p className="introduction__description">
								Programador, desenvolvedor de sites e escritor.
								Apaixonado por tecnologia e sempre motivado a
								aprender.
							</p>
						</h1>
						<Row className="introduction__btn">
							<BtnPrimary link="#projects" text="Ver projetos" />
							<a href="#about-me" className="introduction__btn__more-me">
								Sobre mim
							</a>
						</Row>
					</Col>
					<Col md={6}>
						<div className="w-100 h-100">
							<img
								src={introductionImage}
								alt="Code Typing"
								className="img-fluid"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

function Home() {
	return (
		<>
			<Header />

			<Introduction />

			<AboutMe />

			<Projects />

			<ContactMe />

			<Footer />
		</>
	);
}

export default Home;
