// routing
Router.map(function() {
  this.route('home', {path: '/',
                      layoutTemplate: 'mainLayout',
                      yieldTemplates: {
                        'navbarTemp': {to: 'navbar'},
                        'footerTemp': {to: 'footer'}
                      }
  });
  this.route('dashboard', {layoutTemplate: 'mainLayout',
                            yieldTemplates: {
                              'navbarTemp': {to: 'navbar'},
                              'footerTemp': {to: 'footer'}
                          }
  });
  this.route('register', {layoutTemplate: 'mainLayout',
                          yieldTemplates: {
                            'navbarTemp': {to: 'navbar'},
                            'footerTemp': {to: 'footer'}
                          }
  });
});

// db for events
Events = new Mongo.Collection("events");
Clubs = new Mongo.Collection("clubs");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  var timestamp = new Date();
  var today = new Date(timestamp.getFullYear(),
                      timestamp.getMonth(),
                      timestamp.getDate());

  Template.body.helpers({
      events: function () { return Events.find();
      }
  });
/*
  // register student club
  Template.register.events({
      var club =  event.target.club.value;
      var email = event.target.email.value;
      var university = event.target.university.value;

      Clubs.insert({
          club: club,
          university: university,
          email: email 
 
          return false;
      });
  });

  // adding a new event
  Template.dashboard.events({
      "submit .new-event": function (event) {
        var name = event.target.text.value;
        var date = event.target.date.value;
        var club = event.target.club.value;

        Events.insert({
            name: name,
            date: date,
            club: club
        });

        event.target.name.value = "";
        event.target.date.value = "";
        event.target.club.value = "";

        return false;
      }
  });

  Template.datepicker.rendered=function() {
    this.$('datepicker').datepicker();
  };
  */
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
