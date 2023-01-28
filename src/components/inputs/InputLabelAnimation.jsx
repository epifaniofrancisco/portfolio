import React from "react";
import { Row } from "react-bootstrap";

function InputLabelAnimation({ type, name, label }) {
	return (
		<Row className="my-input-group">
			<input type={type} name={name} required />
			<label for="name" className="label-name">
				<span className="content-name">{label}</span>
			</label>
		</Row>
	);
}

export default InputLabelAnimation;
