import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../logo.svg';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
			{/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
			<Link to="/">
				<img src={navLogo} alt="Phone Store Logo" className="navbar-brand" />
			</Link>
			<ul className="navbar-nav align-items-center">
				<li className="nav-item ml-5">
					<Link to="/" className="nav-link">
						products
					</Link>
				</li>
			</ul>
			<Link to="/cart" className="ml-auto">
				<ButtonContainer>
					<span className="mr-2">
						<i className="fas fa-cart-plus">my cart</i>
					</span>
				</ButtonContainer>
			</Link>
		</nav>
	);
};

const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--lightBlue);
	color: var(--lightBlue);
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	border-radius: 0.5rem;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: var(--lightBlue);
		color: var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`;

export default Navbar;
