import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return this.store.find("user", { followers: currentUser.get("id") });
    return this.store.find('user');
  }
});

