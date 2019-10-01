import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/details" component={ProductDetails} />
				<Route component={Default} />
			</Switch>
		</Fragment>
	);
}

export default App;
