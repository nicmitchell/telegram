import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      return this.get.currentUser('password');
    }
  }
});
