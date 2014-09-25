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
    following: ['davegrohl','mikeyshoes','deanfertita'],
    followers: ['johntheodore','alainjohannes','troy'],
    posts: [1,2,3,4,5]
  }, {
    id: "davegrohl", // username
    name: "Dave Grohl",
    email: "dave@telegram.com",
    password: "queenbee",
    following: ['deanfertita','mikeyshoes','johntheodore'],
    followers: ['alainjohannes','troy','babyduck'],
    posts: [6,7,8,9,10]
  }, {
    id: "deanfertita", // username
    name: "Dean Fertita",
    email: "dean@telegram.com",
    password: "queenbee",
    following: ['mikeyshoes','johntheodore','alainjohannes'],
    followers: ['babyduck','davegrohl','mikeyshoes'],
    posts: [1,2,3,4,5]
  }, {
    id: "mikeyshoes", // username
    name: "Mike Schuman",
    email: "mikey@telegram.com",
    password: "queenbee",
    following: ['johntheodore','alainjohannes','troy'],
    followers: ['babyduck','davegrohl','deanfertita'],
    posts: [1,2,3,4,5]
  }, {
    id: "johntheodore", // username
    name: "John Theodore",
    email: "john@telegram.com",
    password: "queenbee",
    following: ['alainjohannes','troy','babyduck'],
    followers: ['davegrohl','deanfertita','mikeyshoes'],
    posts: [1,2,3,4,5]
  }, {
    id: "alainjohannes", // username
    name: "Alain Johannes",
    email: "alain@telegram.com",
    password: "natasha",
    following: ['davegrohl','deanfertita','mikeyshoes'],
    followers: ['johntheodore','troy','babyduck'],
    posts: [1,2,3,4,5]
  }, {
    id: "troy", // username
    name: "Troy Van Leeuwen",
    email: "troy@telegram.com",
    password: "queenbee",
    following: ['babyduck','alainjohannes','johntheodore'],
    followers: ['mikeyshoes','deanfertita','davegrohl'],
    posts: [1,2,3,4,5]
  }]
});

export default User;
