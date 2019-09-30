import React, { Fragment } from 'react';
import Title from './Title';
import Product from './Product';
import Modal from './Modal';

// Bring in Consumer to pass state
import { ProductConsumer } from '../context';

const ProductList = () => {
	return (
		<Fragment>
			<div className="py-5">
				<div className="container">
					<Title name="our" title="Products" />
					<div className="row">
						<ProductConsumer>
							{value => {
								return (
									<div>
										{value.allProducts.map(product => (
											<Product
												key={product.id}
												product={product}
												handleDetail={value.handleDetail}
												addToCart={value.addToCart}
											/>
										))}
										{value.modalOpened ? (
											<Modal closeModal={value.closeModal} selectedProduct={value.modalProduct} />
										) : null}
									</div>
								);
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductList;
