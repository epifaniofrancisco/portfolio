import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BtnPrimaryIcon from "../components/buttons/BtnPrimaryIcon";
import ServicesCard from "../components/card/ServicesCard";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Technologies from "../components/layout/Technologies";

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
						<p className="my-2 text-about-me-description">
							Sou o Epifânio, desenvolvedor com maior foco em
							desenvolvimento Front End. Atualmente trabalho como
							freelancer com projetos de tamanho pequeno, médio e
							grande porte. Gosto de estar sempre aprendendo coisas
							novas e continuar subindo cada dia mais, rumo ao espaço.
						</p>
						<BtnPrimaryIcon
							link="#"
							text="Baixar currículo"
							iconName="download-outline"
							className="my-3"
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

function Home() {
	return (
		<>
			<Header />
			<AboutMe />

			<section className="p-lg-0 services">
				<Container>
					<h2>Meus Serviços</h2>

					<Row className="p-lg-0 mt-5 justify-content-between"></Row>
				</Container>
			</section>
			<Footer />
		</>
	);
}

export default Home;
