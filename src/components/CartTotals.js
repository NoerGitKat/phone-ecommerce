import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ clearCart, cartSubtotal, cartTax, cartTotal }) {
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						<button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearCart()}>
							Clear cart
						</button>
						<h5>
							<span className="text-title">
								Subtotal:
								<strong>$ {cartSubtotal}</strong>
							</span>
						</h5>
						<h5>
							<span className="text-title">
								Tax:
								<strong>$ {cartTax}</strong>
							</span>
						</h5>
						<h5>
							<span className="text-title">
								Total:
								<strong>$ {cartTotal}</strong>
							</span>
						</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
