import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      var user = this.get('username');
      var password = this.get('password');
      var activeUser = this.store.find(user);
      if (activeUser.password === password){
        activeUser.isAuthenticated = true;
      this.transitionTo('dashboard');
      }

    }
  }
});
