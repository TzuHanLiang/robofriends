import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
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
		this.setState({ robots: robots });
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