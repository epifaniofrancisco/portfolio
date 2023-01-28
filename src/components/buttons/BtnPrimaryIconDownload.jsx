import React from "react";

function BtnPrimaryIconDownload({ link, text, iconName }) {
	return (
		<a href={link} className="btn btn--primary d-flex justify-content-center align-items-center mx-auto mx-sm-0" download>
			<span className="me-2">{text}</span>
			<ion-icon name={iconName}></ion-icon>
		</a>
	);
}

export default BtnPrimaryIconDownload;
