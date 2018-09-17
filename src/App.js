import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import {robots} from './robots';
import './App.css';


class App extends Component {
	
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log("constructor")
	}

	componentDidMount(){
		console.log("componentDiMount");

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json(); 
			})
			.then(users => { 
				this.setState({ robots: users });
			});
		// this.setState will change state, so when the state change will triggrt Updating
		// will automatelly run methods in Updating in order.
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render(){
		console.log("render");
		const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return(
			<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox searchChange={ this.onSearchChange }/>
			<CardList robots={ filterRobots } />
			</div>
		);

	}
}

export default App;