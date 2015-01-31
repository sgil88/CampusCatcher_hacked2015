// db for events
Events = new Mongo.Collection("events");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
      events: [
        { name: "free hotdogs", date: "feb 2"},
        { name: "hackathon", date: "jan 31"}
      ]
      
      //  events: function () {
  
      //return Events.find({});
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
