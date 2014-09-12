import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TelegramENV.locationType
});

Router.map(function() {
  this.route('login');
  this.route('password-reset');
  this.route('password-sent');
  this.route('dashboard');
  this.resource('user', { path: '/user' }, function () {
    this.route('following');
    this.route('followers');
  });
  this.route('register', { path: '/'});
});

export default Router;
