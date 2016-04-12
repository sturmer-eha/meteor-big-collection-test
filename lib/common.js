BigCollection = new Mongo.Collection('XXXXXXXXXXXXXL');


// 31337
'use strict';


Meteor.methods({
  badMethod: function () {
    var randomDoc = BigCollection.findOne();
    var randomDoc_id = randomDoc._id;

    var questions = randomDoc.questions;

    // Update the "quesions" object
    questions[0].title = "Is it really that bad?"

    BigCollection.update(randomDoc_id, {
      $set: { questions: questions }
    });
  }
});
