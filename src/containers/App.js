import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'


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
		const {robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot => {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			});
		return (!robots.length ?
			<h1 className='tc'>Loading...</h1> :
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={ filterRobots } />
					</ErrorBoundry>
				</Scroll>
			</div>
		)
	}

}

export default App;