import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BtnPrimaryIcon from "../components/buttons/BtnPrimaryIcon";
import Header from "../components/layout/Header";

function Home() {
	return (
		<>
			<Header />
			<Container className="about-me my-5 p-lg-0">
				<Row className="align-items-center">
					<Col md={6}>
						<h1>
							Olá, Eu sou o <span>Epifânio Francisco</span>{" "}
							Desenvolvedor Frontend
						</h1>

						<p class="my-2 text-about-me-description">
							Sou o Epifânio, desenvolvedor com maior foco em
							desenvolvimento Front End. Atualmente trabalho como
							freelancer com projetos de tamanho pequeno, médio e
							grande porte. Gosto de estar sempre aprendendo
							coisas novas e continuar subindo cada dia mais, rumo
							ao espaço.
						</p>

						<BtnPrimaryIcon link="#" text="Baixar currículo" iconName="download-outline" className="my-3" />
					</Col>
					<Col md={6} className="about-me__img"></Col>
				</Row>
			</Container>
			<Container></Container>
		</>
	);
}

export default Home;
