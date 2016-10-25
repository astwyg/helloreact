import React from 'react';
import ReactDOM from 'react-dom';
import {
	Panel,
	Row, Col,
	Modal,
	Form, FormGroup, FormControl,HelpBlock,
	Button,
	ControlLabel 
} from "react-bootstrap";

const UserInfo = React.createClass({
	getInitialState(){
		return {
			username:"",
			validPassword:"",
			helpPasswd:"",
		}
	},
	close(){
		this.setState({
			modalVisibleResetPasswd:false
		})
	},
	componentWillMount(){
		//这里应该发ajax请求, 获取用户信息
		this.setState({username:"6vuser"});
	},
	render(){
		return (<div>
			<Panel header="用户信息">
	      <Row>
	      	<Col xs={6}>
	      		用户名:{this.state.username}
	      	</Col>
	      	<Col xs={6}>
	      		密码: <Button bsStyle="danger" bsSize="xsmall" onClick={()=>this.setState({modalVisibleResetPasswd:true})}>重置密码</Button>
	      	</Col>
	      </Row>
	    </Panel>
	    <Modal show={this.state.modalVisibleResetPasswd} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>重置密码</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
          	<FormGroup controlId="formHorizontalPasswd" validationState={this.state.validPasswd}>
				      <Col componentClass={ControlLabel} sm={2}>
				        新密码
				      </Col>
				      <Col sm={10}>
				        <FormControl type="password" placeholder="请输入6位以上新密码" value={this.state.formPasswd} onChange={e=>{
				        	let error = "";
				        	if(e.target.value.length<6){
				        		error = "请输入6位以上新密码";
				        	}
				        	this.setState({helpPasswd:error, validPasswd:error?"error":"success", formPasswd:e.target.value});
				        }}/>
				        <HelpBlock>{this.state.helpPasswd}</HelpBlock>
				      </Col>
				    </FormGroup>
				    <FormGroup controlId="formHorizontalPasswdRepeat" validationState={this.state.validRepeatPasswd}>
				      <Col componentClass={ControlLabel} sm={2}>
				        确认密码
				      </Col>
				      <Col sm={10}>
				        <FormControl type="password" placeholder="请再次输入新密码" value={this.state.formRepeatPasswd} onChange={e=>{
				        	let error = "";
				        	if(e.target.value.length<6){
				        		error = "请输入6位以上新密码";
				        	} else if(e.target.value != this.state.formPasswd){
				        		error = "两次密码输入不一致";
				        	}
				        	console.log(e.target.value, this.state.formPasswd);
				        	this.setState({helpRepeatPasswd:error, validRepeatPasswd:error?"error":"success", formRepeatPasswd:e.target.value});
				        }}/>
				        <HelpBlock>{this.state.helpRepeatPasswd}</HelpBlock>
				      </Col>
				    </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        	<Button 
        		onClick={e=>{console.log(`这里应该发请求将登陆用户的密码修改为${this.state.formPasswd}`)}} 
        		disabled={this.state.formPasswd?(!this.state.helpPasswd&&!this.state.helpRepeatPasswd)?false:true:true}
        		bsStyle="primary">
        		确认</Button>

          <Button onClick={this.close}>关闭</Button>
        </Modal.Footer>
      </Modal>
		</div>);
	}
});

export default UserInfo;