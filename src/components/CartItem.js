import React from 'react';

export default function CartItem(value) {
	const { company, count, id, img, inCart, info, price, title, total } = value.product;
	const { decrementAmount, incrementAmount, removeProduct } = value.checkoutCart;

	return (
		<div className="row my-2 text-capitalize text-center">
			<div className="col-10 mx-auto col-lg-2">
				<img src={img} alt={title} className="img-fluid" style={{ width: '5rem', heigth: '5rem' }} />
			</div>
			<div className="col-10 mx-auto col-lg-2">{title}</div>
			<div className="col-10 mx-auto col-lg-2">{price}</div>
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center">
					<div>
						<span className="btn btn-black mx-1" onClick={() => decrementAmount(id)}>
							-
						</span>
						<span className="btn btn-black mx-1">{count}</span>
						<span className="btn btn-black mx-1" onClick={() => incrementAmount(id)}>
							+
						</span>
					</div>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<div className="cart-icon" onClick={() => removeProduct(id)}>
					<i className="fas fa-trash"></i>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>${total}</strong>
			</div>
		</div>
	);
}
