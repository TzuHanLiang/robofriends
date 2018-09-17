import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import './App.css';
import Scroll from '../components/Scroll';


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
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
			//fetch is a method on the window object.
		// this.setState will change state, so when the state change will triggrt Updating
		// will automatelly run methods in Updating in order.
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render(){
		console.log("render");
		if(this.state.robots.length === 0){
			return <h1 className='tc'>Loading...</h1>
		}else{
			const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return(
			<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox searchChange={ this.onSearchChange }/>
			<Scroll>
				<CardList robots={ filterRobots } />
			</Scroll>
			</div>
		);
		}
		

	}
}

export default App;