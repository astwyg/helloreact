import React from 'react';
import ReactDOM from 'react-dom';

const Body = React.createClass({
	render(){
		return (<div>
			<div className="container">
				{this.props.children}
			</div>
		</div>)
	}
});

export default Body