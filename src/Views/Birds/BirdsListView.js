import React, { Component } from 'react';
import base64 from 'base-64';

class BirdsListView extends Component {
	constructor() {
		super();
		this.state={items:[]};
	}
	componentDidMount(){
		var headers = new Headers();
		headers.append("Authorization", "Basic " + base64.encode("cakpep:studio"));

		fetch("http://localhost:8080/birds", {
			headers: headers
		})
		.then(result=>result.json())
		.then(items=>this.setState({items}));
	}
  render(){
    return (
      <div className="row">
        <h1>Birds </h1>
        <div className="text-right">
        	<button className="btn btn-primary" >Add New Bird</button>
        </div>
        <table className="table table-striped">
        	<tr>
        		<th>ID</th>
        		<th>Owner</th>
        		<th>Name</th>
        		<th>Species</th>
        		<th>Picture</th>
        		<th>Active</th>
        		<th>Created At</th>
        		<th>Action</th>
        	</tr>
        	<tr>
        		<td></td>
        		<td></td>
        		<td></td>
        		<td></td>
        		<td></td>
        		<td></td>
        		<td></td>
        		<td></td>
        	</tr>
        </table>
        <ul>
          {this.state.items.length ?
          	this.state.items.map(item=><li key={item.id}>{item.body}</li>)
            : <li>Loading...</li>
          }
      	</ul>
      </div>
    )
  }
}
export default BirdsListView;