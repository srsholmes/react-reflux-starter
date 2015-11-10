let Reflux = require('reflux');
let Actions = require('../actions/actions');

let Store = Reflux.createStore({
//Set up multiple stores as triggers on this store affect
//everything listening to them.
  listenables: [Actions],

  init() {
    this.contents = {
      heading: 'This is the heading from the store',
      count: 0
    }
  },

  onClickHeading() {
    this.contents = { ...this.contents, ...{
        heading: 'This is the changed heading from the Action'
      }
    }
    this.trigger(this.contents);
  },

  onTick(type) {
    type == 'inc' ? this.contents.count++ : this.contents.count--;
    this.trigger(this.contents);
  },

  getInitialState() {
    return this.contents;
  }

});

module.exports = Store;
