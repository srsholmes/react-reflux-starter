import React from 'react';
import Reflux from 'reflux';
import Store  from '../../stores/store';
import Actions from '../../actions/actions';
import { Counter, CounterFlux } from './'
import { TrafficLightBox } from './';

let App = React.createClass({
	mixins: [
    Reflux.connect(Store)
  ],
  
  someFunc() {
  	alert('someFunc');
  },

  clickHeading() {
    Actions.clickHeading()
  },

	render(){
		return (
			<div>
				<h1 onClick={()=> this.someFunc()}>This is the Web Application</h1>
				<h2 onClick={()=> this.clickHeading()}>{this.state.heading}</h2>
				<Counter />
				<CounterFlux {...this.state}/>
			</div>
		)
	}
});

export default App;