import React from "react";

function BtnPrimaryIcon({ link, text, iconName }) {
	return (
		<a href={link} className="btn btn--primary d-flex justify-content-center align-items-center">
			<span className="me-2">{text}</span>
			<ion-icon name={iconName}></ion-icon>
		</a>
	);
}

export default BtnPrimaryIcon;
