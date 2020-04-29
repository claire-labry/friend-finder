// Loads the data
var friendsData = require('../data/friends.js');

// Routes

module.exports = function (app){
    app.get('/api/friends', function(req,res){
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res){
 
      var newFriend = req.body;

      for(var i = 0; i < newFriend.scores.length; i++){
        newFriend.scores[i] = parseInt(newFriend.scores[i])
      }

      var matchIndex = 0;
      var minDiff = 50;

      for(var i = 0; friendsData.length; i++){
        var totalDifference = 0; 

        for(var j = 0; j < friendsData[i].scores.length; j++){
          var difference = Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);

          totalDifference += difference;
        }
        
        if(totalDifference < minDiff){
          matchIndex = i;
          minDiff = totalDifference;
        }
      }

      friendsData.push(newFriend);

      res.json(friendsData[matchIndex]);

    });
};