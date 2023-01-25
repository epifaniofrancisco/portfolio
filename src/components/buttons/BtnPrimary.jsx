import React from "react";

function BtnPrimary({ link, text}) {
	return (
		<a
			href={link}
			className="btn btn--primary d-flex justify-content-center align-items-center"
		>
			<span>{text}</span>
		</a>
	);
}

export default BtnPrimary;
