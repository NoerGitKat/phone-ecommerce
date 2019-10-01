import React from 'react';
import CartList from './CartList';
import { ProductConsumer } from '../context';

const columnTitles = ['Products', 'Name of Product', 'Price', 'Quantity', 'Remove', 'Total'];

export default function CartColumns() {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row">
				{columnTitles.map(title => (
					<div key={title} className="col-10 mx-auto col-lg-2">
						<p className="text-uppercase">{title}</p>
					</div>
				))}
			</div>
			<div className="row">
				<ProductConsumer>{value => <CartList checkoutCart={value} />}</ProductConsumer>
			</div>
		</div>
	);
}
