// 31337
'use strict';

BigCollection.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

Meteor.publish('data', function () {
  return BigCollection.find();
});


Meteor.startup(function () {
  // Reset the collection
  BigCollection.remove({});

  // Insert dummy data
  BigCollection.insert({
    title: "test survey",
    user: "123",
    created: "1/1/2016",
    questions: [
      {
        _id: 123,
        title: "What is your favorite color?",
        question_type: "multi_choice",
        properties:
        {
          choices: ['red', 'blue', 'green']
        }
      }
    ],
    forms: [
      {
        _id: 123,
        triggers: ['starbucks', 'chipotle', 'subway'],
        questions: [123]
      },
      {
        _id: 345,
        triggers: ['South Dakota', 'New York', 'Rhode Island'],
        questions: [456, 789, 101]
      }
    ]
  });
});
