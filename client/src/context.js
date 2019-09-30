import React, { Component } from 'react';

// Import data to use as state
import { storeProducts, detailProduct } from './data';

// First create context
const ProductContext = React.createContext();

// To use Context API we need:
// Provider - Provides all the state
// Consumer - All the components that will directly link with state

// Should be placed as high in the tree as possible
class ProductProvider extends Component {
	state = {
		allProducts: storeProducts,
		singleProduct: detailProduct,
		cart: [],
		modalOpened: false,
		modalProduct: detailProduct,
	};

	componentDidMount() {
		// Fetches modifiable data
		this.setProducts();
	}

	getItem = id => {
		const product = this.state.allProducts.find(item => item.id === id);
		return product;
	};

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach(product => {
			const singleProduct = { ...product }; // Makes copy
			tempProducts = [...tempProducts, singleProduct];
		});

		this.setState({
			allProducts: tempProducts,
		});
	};

	handleDetail = product => {
		this.setState({
			singleProduct: product,
		});
	};

	addToCart = product => {
		const newCart = [...this.state.cart];
		const addedProduct = this.getItem(product.id);
		addedProduct.inCart = true;
		addedProduct.count = addedProduct.count + 1;
		newCart.push(addedProduct);
		this.setState({
			cart: newCart,
			modalOpened: true,
		});
	};

	closeModal = () => {
		this.setState({
			modalOpened: false,
		});
	};

	openModal = id => {
		const selectedProduct = this.getItem(id);
		this.setState({
			modalProduct: selectedProduct,
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					closeModal: this.closeModal,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
