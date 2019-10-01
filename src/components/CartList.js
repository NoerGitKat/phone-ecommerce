import React from 'react';
import CartItem from './CartItem';

export default function CartList({ checkoutCart }) {
	const { cart } = checkoutCart;
	return (
		<div className="container-fluid">
			{cart.map(product => {
				return <CartItem key={product.id} product={product} checkoutCart={checkoutCart} />;
			})}
		</div>
	);
}
