import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/layout/Header";

function Home() {
	return (
		<>
			<Header />
			<Container className="about-me my-5 p-lg-0">
				<Row>
					<Col md={6}></Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;
