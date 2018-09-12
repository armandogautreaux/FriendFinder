//Requiring objects from data folder
var tableData = require('../data/friends');

//Export api routes to server.js

module.exports = function(app) {
  //We start by defining the content of our route api/friends
  app.get('/api/friends', function(req, res) {
    //The content is going to be our updated tableData
    res.json(tableData);
  });

  //If adding more objects to our tablaData follow the next exteps
  app.post('/api/friends', function(req, res) {
    //1. Require the incoming data through req.body and store each element in unique variables
    var newFriend = req.body;
    var name = newFriend.name;
    var photo = newFriend.photo;
    var scores = [];

    //2. Parse strings into Integers
    var scoreString = newFriend['scores[]'];
    for (var i = 0; i < scoreString.length; i++) {
      scores.push(parseInt(scoreString[i]));
    }

    //3. Create a new object to store the new variables
    var newFriendObject = {
      name: name,
      photo: photo,
      scores: scores
    };

    //4. Logic to send back elements to our request data
    var randomFriend = tableData[Math.floor(Math.random() * tableData.length)];

    //5. Push the new object into our existing TableData
    tableData.push(newFriendObject);

    //6. Sendback to the front-end the choosen data in the step No.4
    res.json(randomFriend);
  });
};
