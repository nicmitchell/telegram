import DS from 'ember-data';

var Post = DS.Model.extend({
  // post_id: DS.attr('number'),
  text: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  created: DS.attr('date', {
      //defaultValue: function() { return new Date(); }
  }),
  isRepost: DS.attr('boolean')
});

Post.reopenClass({

FIXTURES: [
//  JOSH -->
{
  id: 1,
  text: "Making people uncomfortable is one of my hobbies. I'm always hoping that half the people get the joke and the other half are the joke.",
  user: "babyduck",
  created: new Date(2013, 10, 12, 18, 23, 5),
  isRepost: false
}, {
  id: 2,
  text: "If you wanna be famous, then it's okay if the music is fake, because fame isn't real.",
  user: "babyduck",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 3,
  text: "Music is the only thing I've ever known that doesn't have any rules at all.",
  user: "babyduck",
  created: new Date(2013, 6, 8, 1, 23, 5),
  isRepost: false
}, {
  id: 4,
  text: "This has got more jiggle than the jello factory. It’s got more hooks than a bait shop. We put the lean in clean and the ice in nice.",
  user: "babyduck",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 5,
  text: "Life is short. Do everything.",
  user: "babyduck",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, 


//  DAVEGROHL -->

{
  id: 6,
  text: "Guilt is cancer. Guilt will confine you, torture you, destroy you as an artist. It's a black wall. It's a thief.",
  user: "davegrohl",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, {
  id: 7,
  text: "I taught myself how to play the guitar, I taught myself how to play the drums, and I kind of fake doing both of them. But drumming comes more natural to me, and it just feels better.",
  user: "davegrohl",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 8,
  text: "Because you have things like 'American Idol' and you've got radio stations that play music made entirely by computers, it's easy to forget there are bands with actual people playing actual instruments that rock.",
  user: "davegrohl",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 9,
  text: "When there's so much left to do, why spend your time focusing on things you've already done, counting trophies or telling stories about the good old days?",
  user: "davegrohl",
  created: new Date(2013, 10, 12, 18, 23, 5),
  isRepost: false
}, {
  id: 10,
  text: "There's always gonna be rock n' roll bands, there's always gonna be kids that love rock n' roll records, and there will always be rock n' roll.",
  user: "davegrohl",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, 

//  DEAN -->

{
  id: 11,
  text: "It's all in motion; No stoppin' now; I've got nothin' to lose; And only one way up.",
  user: "deanfertita",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, {
  id: 12,
  text: "It's all smooth sailing from here on out.",
  user: "deanfertita",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 13,
  text: "I got bruises and hickies; Stitches and scars; Got my own theme music; It plays wherever I are",
  user: "deanfertita",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 14,
  text: "Fear is the hand; That pulls your strings; A useless toy; Pitiful plaything",
  user: "deanfertita",
  created: new Date(2013, 10, 12, 18, 23, 5),
  isRepost: false
}, {
  id: 15,
  text: "God only knows; Where love vacations; If reason is priceless; There's no reason to pay for it.",
  user: "deanfertita",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, 

//  MIKEY -->

{
  id: 16,
  text: "The relationship between any two communities in the global economy is not unlike a marriage.",
  user: "mikeyshoes",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, {
  id: 17,
  text: "As couples counselors advise, relationships falter when two partners are too interdependent.",
  user: "mikeyshoes",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 18,
  text: "When any stress affecting one partner - the loss of a job, an illness, a bad-hair day - brings down the other, the couple suffers.",
  user: "mikeyshoes",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 19,
  text: "Our ability to love, like our ability to produce, must be grounded in our own security.",
  user: "mikeyshoes",
  created: new Date(2013, 10, 12, 18, 23, 5),
  isRepost: false
}, {
  id: 20,
  text: "And our economy, like our love, when it comes from a place of community, can grow without limit.",
  user: "mikeyshoes",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, 

//  JOHN -->

{
  id: 21,
  text: "I'm bolted from within from long conniving heights; The hale, it makes a special sound that always stays into the night;",
  user: "johntheodore",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, {
  id: 22,
  text: "She tells me I'm not capable of what they accuse me; With no remorse I stand and say that guilt is what I plead;",
  user: "johntheodore",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 23,
  text: "My devil makes me dream like no other mortal dreams; With a blank eye corner;",
  user: "johntheodore",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 24,
  text: "The only way to see him in the tunnel where he slept; By the longest tusk of corridors numb below the neck;",
  user: "johntheodore",
  created: new Date(2013, 10, 12, 18, 23, 5),
  isRepost: false
}, {
  id: 25,
  text: "When I bend and kick in form with twilight as my guide; In every home the ghost pays gossip you can hear them if you try;",
  user: "johntheodore",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, 

//  ALAIN -->

{
  id: 26,
  text: "I thought I saw him on the video; A trance is keeping him under; I know that god is in the radio; Checkin the station;",
  user: "alainjohannes",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, {
  id: 27,
  text: "I'm glad I caught it from me to you; Just a call in the medium; I know hear it, I hear it too; It's everywhere that I go;",
  user: "alainjohannes",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 28,
  text: "You come back another day; And do no wrong;",
  user: "alainjohannes",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 29,
  text: "The say the devil is paranoid; Always signin the cover;",
  user: "alainjohannes",
  created: new Date(2013, 10, 12, 18, 23, 5),
  isRepost: false
}, {
  id: 30,
  text: "But god is leakin through the stereo; Between the station to station;",
  user: "alainjohannes",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, 

//  TROY -->

{
  id: 31,
  text: "I saw you, in a way; Beyond figure out; These lines of life have been drawn & can't be removed;",
  user: "troy",
  created: new Date(2013, 5, 6, 1, 23, 5),
  isRepost: false
}, {
  id: 32,
  text: "Open up your eyes; Deep blue, glassy lake & swim 'til water & sky; Now are one, out of two;",
  user: "troy",
  created: new Date(2013, 5, 7, 1, 23, 5),
  isRepost: false
}, {
  id: 33,
  text: "Every breath an art; The dignity to learn it can strain & break your heart;",
  user: "troy",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 34,
  text: "This life is a trip when you're psycho in love;",
  user: "troy",
  created: new Date(2013, 3, 9, 1, 23, 5),
  isRepost: false
}, {
  id: 35,
  text: "I want you to notice when I'm not around; Wherever you are;",
  user: "troy",
  created: new Date(2013, 6, 10, 1, 23, 5),
  isRepost: false
}]
});

export default Post;