import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/about_us.jpg';

const AboutUS = () => {
	return (
		<div>
			<div>
				<img className="w-50  m-5" src={img} alt="" />
			</div>
			<Container>
				<Row className="m-3">
					<Col>
						
					</Col>
					<Col>
						<h1>
							<span className="text-danger">1.</span> Professionality
						</h1>
						<p>
							we try to teach such a way that
							they can shine in life
						</p>
					</Col>
				</Row>
				<Row className="m-3">
					<Col>
						
					</Col>
					<Col>
						<h1>
							<span className="text-primary">2.</span> Quality
						</h1>
						<p>We won't compromise with our qulaity so the childere can get the best education form here</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutUS;
