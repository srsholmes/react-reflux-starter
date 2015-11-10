import React from 'react';

let ChildComponent = React.createClass({
  render() {
    let para = (<p>This is the child component</p>);
    if (this.props.count > 10) {
      para = (<p className="green">You clicked more than 10 times</p>);
    }
    return (
      <div>
        {para}
      </div>
    );
  }
});

export default ChildComponent;