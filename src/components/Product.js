import React from 'react';
import { Link } from 'react-router-dom';
import ProductWrapper from './ProductWrapper';

const Product = props => {
	const { company, img, info, price, title, total, inCart } = props.product;
	const { handleDetail, addToCart } = props;

	return (
		<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
			<div className="card">
				<div className="img-container p-5" onClick={() => handleDetail(props.product)}>
					<Link to="/details">
						<img src={img} alt={title} className="card-img-top" />
					</Link>
					<button className="cart-btn" disabled={inCart} onClick={() => addToCart(props.product)}>
						{inCart ? (
							<p className="text-capitalize mb-0" disabled>
								in cart
							</p>
						) : (
							<i className="fas fa-cart-plus" />
						)}
					</button>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<p className="align-self-center mb-0">{title}</p>
					<h5 className="text-blue font-italic mb-0">
						<span className="mr-1">$</span>
						{price}
					</h5>
				</div>
			</div>
		</ProductWrapper>
	);
};

export default Product;
