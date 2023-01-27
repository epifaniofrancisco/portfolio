import React from "react";

function ButtonIconLeft({ link, iconName, text, }) {
	return (
		<a
			href={link}
			className="btn btn--primary d-flex justify-content-center align-items-center button-left-icon" target="_blank"
		>
			<ion-icon name={iconName}></ion-icon>
			<span className="me-2">{text}</span>
		</a>
	);
}

export default ButtonIconLeft;
