import React from 'react';

const Default = props => {
	const { pathname } = props.location;
	return (
		<div className="container">
			<div className="row">
				<div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
					<h1 className="display-3">404</h1>
					<h1>error</h1>
					<h2 className="mt-5">Page not found</h2>
					<h3 className="mt-5">
						The request URL: <span className="text-danger">{pathname}</span> was not found
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Default;
