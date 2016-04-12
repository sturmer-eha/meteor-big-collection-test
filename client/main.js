// 31337
'use strict';


Meteor.subscribe('data');


Template.hello.helpers({
  data: function () {
    return JSON.stringify(BigCollection.findOne(), null, 4);
  }
});

Template.hello.events({
  'click button': function (event, instance) {
    Meteor.call("badMethod");
  }
});
