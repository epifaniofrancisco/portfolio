import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	return (
		<footer>
            <Container className="mt-5 p-lg-0">
                <Row>
                    <Col md={5}>
                        <h4>Sempre em busca do próximo nível.</h4>
                        <p>
                            Evoluir de forma contínua é o que busco a cada dia.
                            Juntando o foco e a prática posso trazer as melhores
                            experiências para meus clientes.
                        </p>
                        <div className="mt-3 mb-3 social-medias">
                            <ul className="list-inline social-medias">
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.linkedin.com/in/epif%C3%A2nio-francisco-3a44741ba/"
                                        target="_blank"
                                    >
                                        <ion-icon name="logo-linkedin"></ion-icon>{" "}
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://github.com/epifaniofrancisco"
                                        target="_blank"
                                    >
                                        <ion-icon name="logo-github"></ion-icon>{" "}
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100075626726544"
                                        target="_blank"
                                    >
                                        <ion-icon name="logo-facebook"></ion-icon>{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={1} className="mx-auto">
                        <h5 className="mb-4">Secções</h5>
                        <p>
                            <a href="#about-me" className="underline-hover-effect">
                                Sobre mim
                            </a>
                        </p>
                        <p>
                            <a href="#my-skills" className="underline-hover-effect">
                                Habilidades
                            </a>
                        </p>
                        <p>
                            <a href="#my-projects" className="underline-hover-effect">
                                Projetos
                            </a>
                        </p>
                    </Col>
                    <Col md={1} className="mx-auto">
                        <h5 className="mb-4">Contacto</h5>
                        <p>
                            <a
                                href="mailto:epifaniofrancisco03@gmail.com"
                                className="underline-hover-effect"
                                target="_blank"
                            >
                                Email
                            </a>
                        </p>
                        <p>
                            <a
                                href="tel:244995621921"
                                className="underline-hover-effect"
                                target="_blank"
                            >
                                Telefone
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://wa.me/244995621921"
                                className="underline-hover-effect"
                                target="_blank"
                            >
                                Whatsapp
                            </a>
                        </p>
                    </Col>
                    <Col md={2} className="mx-auto">
                        <h5 className="mb-4">Serviços</h5>
                        <p>
                            <a href="" className="underline-hover-effect">
                                Construção de site
                            </a>
                        </p>
                        <p>
                            <a href="" className="underline-hover-effect">
                                Criação de aplicativos
                            </a>
                        </p>
                        <p>
                            <a href="" className="underline-hover-effect">
                                Web Design
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-between mt-3 py-4 copyright">
                    <Col md={6} className="col-md-6 content">
                        <span>
                            © Copyright 2022 <strong>Epifânio Francisco</strong>
                            . <br />
                            Todos os direitos reservados.
                        </span>
                    </Col>
                    <Container>
                                <a href="#home" className="top">
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                </a>
                            </Container>
                </Row>
            </Container>
        </footer>
	);
}

export default Footer;
