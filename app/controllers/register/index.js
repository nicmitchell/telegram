import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerUser: function(){
      this.store.createRecord('user', {
        id: this.get('user'),
        name: this.get('name'),
        email: this.get('email'),
        password: this.get('password'),

      });
      this.transitionTo('dashboard');
    }
  }
});
