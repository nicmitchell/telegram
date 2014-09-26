import DS from 'ember-data';

var User = DS.Model.extend({
  //user_id: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  // following: //DS.attr('user', {async: true}),
  // function() {
  //   return this.store.find("user", {followers: currentUser.get("id")});
  // },
  followers: function() {
    return this.store.find("user", {followers: currentUser.get("id")});
  },
  posts: DS.hasMany('post', {async: true}),
  imagePath: function() {
    return "/assets/images/avatars/"+this.get("id")+".jpg";
  }.property('id')
});

User.reopenClass({

  FIXTURES: [
  {
    id: "babyduck", // username
    name: "Josh Homme",
    email: "josh@telegram.com",
    password: "queenbee",
    following: ['dave','mikeyshoes','dean'],
    followers: ['john','alain','troy'],
    posts: [1,2,3,4,5]
  }, {
    id: "dave", // username
    name: "Dave Grohl",
    email: "dave@telegram.com",
    password: "queenbee",
    following: ['dean','mikeyshoes','john'],
    followers: ['alain','troy','babyduck'],
    posts: [6,7,8,9,10]
  }, {
    id: "dean", // username
    name: "Dean Fertita",
    email: "dean@telegram.com",
    password: "queenbee",
    following: ['mikeyshoes','john','alain'],
    followers: ['babyduck','dave','mikeyshoes'],
    posts: [11,12,13,14,15]
  }, {
    id: "mikeyshoes", // username
    name: "Mike Schuman",
    email: "mikey@telegram.com",
    password: "queenbee",
    following: ['john','alain','troy'],
    followers: ['babyduck','dave','dean'],
    posts: [16,17,18,19,20]
  }, {
    id: "john", // username
    name: "John Theodore",
    email: "john@telegram.com",
    password: "queenbee",
    following: ['alain','troy','babyduck'],
    followers: ['dave','dean','mikeyshoes'],
    posts: [21,22,23,24,25]
  }, {
    id: "alain", // username
    name: "Alain Johannes",
    email: "alain@telegram.com",
    password: "natasha",
    following: ['dave','dean','mikeyshoes'],
    followers: ['john','troy','babyduck'],
    posts: [36,37,38,39,40]
  }, {
    id: "troy", // username
    name: "Troy Van Leeuwen",
    email: "troy@telegram.com",
    password: "queenbee",
    following: ['babyduck','alain','john'],
    followers: ['mikeyshoes','dean','dave'],
    posts: [41,42,43,44,45]
  }]
});

export default User;
