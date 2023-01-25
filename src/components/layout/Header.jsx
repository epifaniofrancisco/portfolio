import React from "react";
import { Container, Navbar, Nav,  } from "react-bootstrap";

function Header() {
	return (
		<Navbar bg="dark" expand="lg" className="d-flex">
			<Container>
				<Navbar.Brand href="index">Epifânio Francisco</Navbar.Brand>

				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="mx-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#">Sobre mim</Nav.Link>
						<Nav.Link href="#">Serviços</Nav.Link>
						<Nav.Link href="#">Habilidades</Nav.Link>
						<Nav.Link href="#">Projetos</Nav.Link>
						<Nav.Link href="#">Contactos</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
