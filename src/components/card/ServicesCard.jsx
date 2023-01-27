import React from "react";
import { Card } from "react-bootstrap";

function ServicesCard({ iconName, title, text}) {
	return (
		<Card className="services__card text-center">
			<ion-icon name={iconName}></ion-icon>
			<Card.Body className="card-body">
				<Card.Title className="card-title">
		{title}
				</Card.Title>
				<Card.Text className="card-text">
					{text}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ServicesCard;
