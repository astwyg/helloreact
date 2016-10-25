import {
	Navbar,Nav,NavItem,NavDropdown,
	MenuItem,
	FormGroup,FormControl,
	Button
} from "react-bootstrap";
import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
	render(){
		return (
			<Navbar inverse fixed-top>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">React-Bootstrap</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		    	<Nav pullRight>
		        <NavItem eventKey={1} href="#">Link Right</NavItem>
		        <NavItem eventKey={2} href="#">Link Right</NavItem>
		      </Nav>
					<Navbar.Form pullRight>
						<FormGroup>
						  <FormControl type="text" placeholder="Search" />
						</FormGroup>
						{' '}
						<Button type="submit">Submit</Button>
					</Navbar.Form>
		    </Navbar.Collapse>
		  </Navbar>
		);
	}
});

export default Header;