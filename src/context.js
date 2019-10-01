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
		cartSubtotal: 0,
		cartTax: 0,
		cartTotal: 0,
		modalOpened: false,
		modalProduct: detailProduct,
	};

	componentDidMount() {
		// Fetches modifiable data
		this.setProducts();
	}

	getProduct = id => {
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
		const addedProduct = this.getProduct(product.id);
		addedProduct.inCart = true;
		addedProduct.count = addedProduct.count + 1;
		addedProduct.total = addedProduct.count * addedProduct.price;
		newCart.push(addedProduct);
		this.setState(
			() => {
				return {
					cart: newCart,
					modalOpened: true,
					modalProduct: addedProduct,
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	addTotals = () => {
		let subtotal = 0;
		const newCart = [...this.state.cart];
		newCart.map(item => (subtotal += item.total));
		const tempTax = subtotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subtotal + tax;
		this.setState({
			cartSubtotal: subtotal,
			cartTax: tax,
			cartTotal: total,
		});
	};

	closeModal = () => {
		this.setState({
			modalOpened: false,
		});
	};

	incrementAmount = id => {
		const newCart = [...this.state.cart];
		const findProduct = newCart.find(item => item.id === id);
		const indexProduct = newCart.indexOf(findProduct);
		findProduct.count = findProduct.count + 1;
		findProduct.total = findProduct.count * findProduct.price;
		newCart[indexProduct] = findProduct;
		this.setState(
			() => {
				return {
					cart: newCart,
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	decrementAmount = id => {
		const newCart = [...this.state.cart];
		const findProduct = newCart.find(item => item.id === id);
		const indexProduct = newCart.indexOf(findProduct);
		if (findProduct.count < 1) {
		} else {
			findProduct.count = findProduct.count - 1;
			findProduct.total = findProduct.count * findProduct.price;
		}
		newCart[indexProduct] = findProduct;
		this.setState(
			() => {
				return {
					cart: newCart,
				};
			},
			() => {
				this.addTotals();
			}
		);
	};

	removeProduct = id => {
		const newCart = [...this.state.cart];
		const findProduct = newCart.find(item => item.id === id);
		findProduct.inCart = false;
		findProduct.count = 0;

		const indexProduct = newCart.indexOf(findProduct);
		newCart.splice(indexProduct, 1);
		this.setState({
			cart: newCart,
		});
	};

	clearCart = () => {
		const emptyCart = [...this.state.cart];
		emptyCart.splice(0, emptyCart.length);
		this.setState(
			() => {
				return {
					cart: emptyCart,
				};
			},
			() => {
				this.setProducts();
				this.addTotals();
			}
		);
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					closeModal: this.closeModal,
					incrementAmount: this.incrementAmount,
					decrementAmount: this.decrementAmount,
					removeProduct: this.removeProduct,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
