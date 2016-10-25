import React from 'react';
import ReactDOM from 'react-dom';
import {
	Table,
	Panel,
} from "react-bootstrap";

const CoinsLog = React.createClass({
	getInitialState(){
		return {
			data:[]
		}
	},
	componentWillMount(){
		this.setState({
			data:[
				{
					"time":"2016-07-01",
					"change":"+100",
					"note":"备注1",
				},
				{
					"time":"2016-07-02",
					"change":"+101",
					"note":"备注2",
				}
			]
		})
	},
	render(){
		return (<div>
			<Table striped bordered condensed hover>
		    <thead>
		      <tr>
		        <th>时间</th>
		        <th>六维币变化</th>
		        <th>备注</th>
		      </tr>
		    </thead>
		    <tbody>
		      {this.state.data.map((info, index)=>{
		      	return (<tr key={index}>
		      		<td>{info.time}</td>
		      		<td>{info.change}</td>
		      		<td>{info.note}</td>
		      	</tr>);
		      })}
		    </tbody>
		  </Table>
		</div>)
	}
});

export default CoinsLog;