import Reflux from 'reflux';
import Store  from '../../stores/store';
import Actions from '../../actions/actions';

const HEADER = {
  mixins: [
    Reflux.connect(Store)
  ],
  someFunc() {
    alert('someFunc from BASE component Header');
  },

  clickHeading() {
    Actions.clickHeading()
  },

  //This is for both the iOS switch and the web checkbox.
  onToggle(){
    Actions.switchToggle();
  },

  render(){
    console.log('Head render func')
    return (
      <div>This is the base Header Class Render</div>
    )
  }
};

module.exports = {
  HEADER: HEADER
};