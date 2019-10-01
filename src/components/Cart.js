import React, { Fragment } from 'react';
import CartColumns from './CartColumns';
import Title from './Title';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../context';

const Cart = () => {
	return (
		<div>
			<ProductConsumer>
				{value => {
					const { cart, clearCart, cartSubtotal, cartTax, cartTotal } = value;
					if (cart.length > 0) {
						return (
							<Fragment>
								<Title name="your" title="cart" />
								<CartColumns />
								<CartTotals
									clearCart={clearCart}
									cartSubtotal={cartSubtotal}
									cartTax={cartTax}
									cartTotal={cartTotal}
								/>
							</Fragment>
						);
					} else {
						return 'Your cart is empty!';
					}
				}}
			</ProductConsumer>
		</div>
	);
};

export default Cart;
