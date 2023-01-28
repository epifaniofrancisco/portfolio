import React from "react";
import { Container, Navbar, Nav, NavItem,  } from "react-bootstrap";

function Header() {
	return (
		<header>
			<Navbar expand="lg" className="w-100 d-flex top-0">
				<Container>
					<Navbar.Brand href="index">Epifânio Francisco</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" className="navicon" ><span class=""></span>
                <span class=""></span>
                <span class=""></span></Navbar.Toggle>
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="mx-auto my-2 my-lg-0"
							navbarScroll
						>
							<Nav.Link href="#home">Inicio</Nav.Link>
							<Nav.Link href="#about-me">Sobre mim</Nav.Link>
							<Nav.Link href="#projects">Projetos</Nav.Link>
							<Nav.Link href="#contact-me">Contactos</Nav.Link>
						</Nav>
						<NavItem>
							<Nav.Link href="#" className="d-flex align-items-center"><ion-icon name="logo-github"></ion-icon> <span className="ms-2">GitHub</span></Nav.Link>
						</NavItem>
						<Nav />

					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}

export default Header;
