import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
	return (
		<div className="container  p-4 footer-container mt-3">
			<div className="d-flex align-items-center  justify-content-between text-white">
				<div>
					<h3>PHONE SUPPORT</h3>
					<p>24 HOURS A DAY</p>
					<p>
						<small>+ 5546667</small>
					</p>
				</div>
				<p className="text-denger">© Copyright 2021 TANVIR ADITTO</p>
		
				<div>
					<h3>CONNECT WITH US</h3>
					<p>@24?7?365 We ARE HERE</p>
				</div>
				
			</div>
		</div>
	);
};

export default Footer;
