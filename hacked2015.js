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
                            'footerTemp': {to: 'footer'},
                            
                          }
  });
});

// db for events
ClubEvents = new Mongo.Collection("clubEvents");
Clubs = new Mongo.Collection("clubs");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  var timestamp = new Date();
  var today = new Date(timestamp.getFullYear(),
                      timestamp.getMonth(),
                      timestamp.getDate());

  Template.home.helpers({
      clubEvents: function () { return ClubEvents.find();
      }
  });

  Template.navbarTemp.events({
      'submit .new-club': function(event, template) {
        event.preventDefault();

        // add club to database
        var club =  template.find("#clubName").value;
        var email = template.find("#email").value;
        var university = template.find("#university").value;
        var description = template.find("#clubDescription").value;
        var password = template.find("#password").value;

        Accounts.createUser({
            club: club,
            university: university,
            description: description,
            email: email,
            password: password,
        });
          
        Router.go('dashboard');
        return false;
      }
  });
  
  Template.navbarTemp.events({
      'submit .login': function(event, template) {
        event.preventDefault();
        var email = template.find('#login-email').value;
        var pass = template.find('#login-password').value;

        Meteor.loginWithPassword(email, pass);
        Router.go('home');
        return false;
      }
  });
  
  Template.navbarTemp.events({
      'submit .logout': function(event, template) {
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
        return false;
      }
  });


/*
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
*/

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
