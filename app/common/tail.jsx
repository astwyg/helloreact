import React from 'react';
import ReactDOM from 'react-dom';
import {
	Navbar,Nav,NavItem,NavDropdown,
	MenuItem,
	FormGroup,FormControl,
	Button,
	Col, Row,
} from "react-bootstrap";

const Tail = React.createClass({
	render(){
		return (
			<Navbar inverse static-bottom style={{marginBottom:0}}>
			  <Row>
			  	<Col md={8} xs={12}>
			  		<div style={{color:"white", margin:"50px 40px"}}>
			  			<p>Info..</p>
			  		</div>
			  	</Col>
			  	<Col md={2} xsHidden>
			  		<img src="/statics/qrcode_wx.jpg" style={{width:"140px", height:"140px"}} />
			  	</Col>
			  </Row>
		  </Navbar>
		);
	}
});

export default Tail;