import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Academics = () => {
	const [ dentists, setDentists ] = useState([]);
	useEffect(() => {
		fetch('./dentist.json').then((res) => res.json()).then((data) => setDentists(data));
	}, []);
	return (
		<div className="container">
			<h1 className="mx-auto text-success mb-5">Our Exparts</h1>
			<Row xs={1} md={3} className="g-4 container">
				{dentists.map((dentist) => (
					<Col key={dentist.Id}>
						<Card>
							<Card.Img variant="top" src={dentist.img} />
							<Card.Body>
								<Card.Title>{dentist.name}</Card.Title>
								<h5>Expart : {dentist.course}</h5>
								<p>Age : {dentist.age}</p>
								<small>{dentist.email}</small>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Academics;
