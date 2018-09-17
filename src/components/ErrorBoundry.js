import React, {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}
// if anything errors out it will run this lifecycle hook
	componentDidCatch(error, info){
		this.setState({ hasError: true });
	}

	render(){
		return this.state.hasError ?
		<h1>Oooops. That is not good</h1> :
		this.props.children;
	}
}

export default ErrorBoundry;