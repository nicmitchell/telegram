import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var username = this.get('username');
      var password = this.get('password');
      var activeUser = this.store.find(username);
      if (activeUser.password === password){
        activeUser.isAuthenticated = true;
      this.transitionTo('dashboard');
      }

    }
  }
});
