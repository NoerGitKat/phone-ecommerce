import React from 'react';
import ModalWrapper from './ModalWrapper';
import ButtonWrapper from './ButtonWrapper';
import { Link } from 'react-router-dom';

export default function Modal(props) {
	const { img, title, price } = props.selectedProduct;
	const { closeModal } = props;
	return (
		<ModalWrapper onClick={() => closeModal()}>
			<div className="container">
				<div className="row">
					<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
						<h5>Item added to the cart</h5>
						<img src={img} alt={title} className="img-fluid" />
						<h5>{title}</h5>
						<h5 className="text-muted">price: $ {price}</h5>
						<Link to="/">
							<ButtonWrapper>Back to products</ButtonWrapper>
						</Link>
						<Link to="/cart">
							<ButtonWrapper cart>Go to cart</ButtonWrapper>
						</Link>
					</div>
				</div>
			</div>
		</ModalWrapper>
	);
}
