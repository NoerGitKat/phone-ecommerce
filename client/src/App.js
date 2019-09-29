import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
	return (
		<Fragment>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route exact path="/cart" component={Cart} />
				<Route exact path="/details" component={Details} />
				<Route component={Default} />
			</Switch>
		</Fragment>
	);
}

export default App;
