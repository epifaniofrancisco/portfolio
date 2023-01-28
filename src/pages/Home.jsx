import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BtnPrimary from "../components/buttons/BtnPrimary";
import BtnPrimaryIcon from "../components/buttons/BtnPrimaryIcon";
import InputLabelAnimation from "../components/inputs/InputLabelAnimation";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ProjectCard from "../components/layout/ProjectCard";
import Technologies from "../components/layout/Technologies";

const projectsItem = [
	{
		id: 1,
		title: "1",
		description: "1",
		demo: "1",
		github: "1",
		image: "1",
		alt: "1",
	},
	{
		id: 2,
		title: "1",
		description: "1",
		demo: "1",
		github: "1",
		image: "1",
		alt: "1",
	},
	{
		id: 3,
		title: "1",
		description: "1",
		demo: "1",
		github: "1",
		image: "1",
		alt: "1",
	},
];

function AboutMe() {
	return (
		<section>
			<Container className="about-me my-5 p-lg-0">
				<Row className="align-items-center">
					<Col md={6}>
						<h1>
							Olá, Eu sou o <span>Epifânio Francisco</span>{" "}
							Desenvolvedor Frontend
						</h1>
						<p className="my-2 mb-4 text-about-me-description">
							Sou o Epifânio, desenvolvedor com maior foco em
							desenvolvimento Front End. Atualmente trabalho como
							freelancer com projetos de tamanho pequeno, médio e
							grande porte. Gosto de estar sempre aprendendo
							coisas novas e continuar subindo cada dia mais, rumo
							ao espaço.
						</p>

						<BtnPrimaryIcon
							link="#"
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

function Projects() {
	return projectsItem.map((project) => (
		<ProjectCard
			id={project.id}
			title={project.title}
			description={project.description}
			previewLink={project.demo}
			github={project.github}
			image={project.image}
			alt={project.alt}
		/>
	));
}

function ContactMe() {
	return (
		<section
			id="contact-me"
			className="container p-lg-0 my-5 about-me contact-me"
		>
			<div className="row justify-content-between">
				<div className="col-md-5">
					<h2>
						Chegou a hora de dar o passo inicial para{" "}
						<span>levar seu projeto para a um outro nível</span>.
					</h2>
				</div>
				<div className="col-md-4">
					<p>
						{" "}
						“Você pode criar qualquer coisa: basta escrever” – C. S.
						Lewis
					</p>
				</div>
			</div>

			<div className="row justify-content-between mt-5">
				<div className="col-md-6 about-me-img"></div>

				<Col md={5}>
					<form className="ms-5 needs-validation" novalidate>
						<div className="row">
							<InputLabelAnimation
								type="text"
								name="name"
								label="Nome"
							/>
						</div>
						<div className="row">
							<InputLabelAnimation
								type="email"
								name="email"
								label="Email"
							/>
						</div>
						<div className="row">
							<InputLabelAnimation
								type="tel"
								name="phone"
								label="Telefone"
							/>
						</div>
						<div className="row">
							<InputLabelAnimation
								type="text"
								name="topic"
								label="Assunto"
							/>
						</div>
						<div className="row">
							<div className="row my-input-group">
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
							</div>
						</div>
					</form>
				</Col>
			</div>
		</section>
	);
}

function Home() {
	return (
		<>
			<Header />
			<Container className="about-me my-5 p-lg-0">
				<Row className="align-items-center">
					<Col md={6}>
						<h1 className="mb-5">
							Olá, Eu sou o <span>Epifânio Francisco</span>{" "}
							Desenvolvedor Frontend
						</h1>

						<BtnPrimary link="#" text="Ver projetos" />
					</Col>
					<Col md={6}>
						<div className="technologies">
							<Technologies />
						</div>
					</Col>
				</Row>
			</Container>
			<AboutMe />

			<section className="p-lg-0 projects">
				<Container>
					<h2 className="text-center">Projetos</h2>

					<Row className="p-lg-0 mt-5 justify-content-between">
						<Projects />
					</Row>
				</Container>
			</section>
			<ContactMe />

			<Footer />
		</>
	);
}

export default Home;
