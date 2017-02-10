import React, { Component } from 'react';
import './bulma.css';
import {Todo} from './Todo.js'
export  class Todoja extends Component {
	state={
		value:''
	}
	EventClick=(event)=>{
		this.setState({value:event.target.value});
	}
	render() 
	{	
		var box = [];

		for (var i = this.state.value - 1; i >= 0; i--) {
			box.push(<div className="column notification is-primary has-text-centered"><Todo/></div>);
		
	}

		return(

			<div>
				<span>
					<select onChange={this.EventClick} value={this.state.value}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</select>
				</span>
				<h1>{this.state.value}</h1>
				<div className="columns">
				{box}
				</div>
			</div>              
             


		);
	}             



}

