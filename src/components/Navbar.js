import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../logo.svg';
import ButtonWrapper from './ButtonWrapper';
import NavWrapper from './NavWrapper';

const Navbar = () => {
	return (
		<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
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
				<ButtonWrapper>
					<span className="mr-2">
						<i className="fas fa-cart-plus">my cart</i>
					</span>
				</ButtonWrapper>
			</Link>
		</NavWrapper>
	);
};

export default Navbar;
