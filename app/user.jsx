import { Button, Input, Row, Grid } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./common/header.jsx";
import Body from "./common/body.jsx";
import Tail from "./common/tail.jsx";
import AgentTools from "./user/agenttools.jsx";
import CoinsLog from "./user/coinslog.jsx";
import UserInfo from "./user/userinfo.jsx";

const ThisPage = React.createClass({
	getInitialState() {
    return {
      text:"",
    };
  },
	render() {
		return(
		  <div>
        <Header />
        <Body>
          <UserInfo/>
          <AgentTools/>
          <CoinsLog/>
        </Body>
        <Tail />
      </div>
		);
	}
});

ReactDOM.render(<ThisPage />, document.getElementById('page'));