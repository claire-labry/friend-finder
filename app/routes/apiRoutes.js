// Loads the data
var friendsData = require('../data/friends.js');

// Routes

module.exports = function (app){
    app.get('/api/friends', function(req,res){
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res){
 
      var newFriend = req.body;
      
      console.log(newFriend);

      for(var i = 0; i < newFriend.scores.length; i++){
        newFriend.scores[i] = parseInt(newFriend.scores[i])
      }
      
      console.log(friendsData);
     
      var matchIndex = 0;
      var minDiff = 50;

      for(var i = 0; i < friendsData.length; i++){
        var totalDifference = 0; 

        console.log(friendsData[i]);

        for(var j = 0; j < friendsData[i].scores.length; j++){
          var difference = Math.abs(newFriend.scores[i] - friendsData[i].scores[j]);

          totalDifference += difference;
        }
        
        if(totalDifference < minDiff){
          matchIndex = i;
          minDiff = totalDifference;
        }
      }

      friendsData.push(newFriend);

      console.log(friendsData[matchIndex]);
      res.json(friendsData[matchIndex]);
      
    });
  };