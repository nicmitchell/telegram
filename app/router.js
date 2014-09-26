import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TelegramENV.locationType
});

Router.map(function() {
  this.resource('register', { path: '/' }, function () {
    this.route('login');
    this.route('password-reset');
    this.route('password-sent');
  });
  this.route('dashboard');
  this.resource('user', { path: '/:user_id' }, function () {
    this.route('following', { path: '/following' });
    this.route('followers');
    this.route('posts', { path: '/' });
  });
  this.route('user/followers');
});

export default Router;
