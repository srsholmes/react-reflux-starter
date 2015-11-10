import React from 'react';
import Actions from '../../actions/actions';
import { ChildComponent } from './'

let CounterFlux = React.createClass({
  handleClick(type) {
    Actions.tick(type);
  },
  render() {
    return (
      <div>
        Clicked: {this.props.count} times
        {' '}
        <button onClick={()=> this.handleClick('inc')}>+</button>
        {' '}
        <button onClick={()=> this.handleClick('dec')}>-</button>
        {' '}
        <ChildComponent {...this.props}/>
      </div>
    );
  }
});

export default CounterFlux;