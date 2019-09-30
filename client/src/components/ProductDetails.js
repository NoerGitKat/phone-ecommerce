import React, { Fragment } from 'react';
import { ProductConsumer } from '../context';
import ButtonWrapper from './ButtonWrapper';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
	return (
		<ProductConsumer>
			{value => {
				const { title, img, company, price, info, inCart } = value.singleProduct;
				const { addToCart } = value;

				return (
					<div className="container py-5">
						<div className="row">
							<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
								<h1>{title}</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<img src={img} alt={title} className="img-fluid" />
							</div>
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<h2>Model: {title}</h2>
								<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
									Made by: <span className="text-uppercase">{company}</span>
								</h4>
								<h4 className="text-blue">
									<strong>
										Price: <span>$</span>
										{price}
									</strong>
								</h4>
								<p className="text-capitalize font-weight-bold mt-3 mb-0">
									Some info about the product:
								</p>
								<p className="text-muted lead">{info}</p>
							</div>
							<Link to="/">
								<ButtonWrapper>Back to products</ButtonWrapper>
							</Link>
							<ButtonWrapper cart disabled={inCart} onClick={() => addToCart(value.singleProduct)}>
								{inCart ? 'In your cart' : 'Add to cart'}{' '}
							</ButtonWrapper>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
};

export default ProductDetails;
