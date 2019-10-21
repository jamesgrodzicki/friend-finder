const friendsData = require('../data/friends.js');
const friendsArray = friendsData.friendsArray;

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsArray);
    });

    app.post('/api/friends', function(req, res){
        friendsArray.push(req.body);
        console.log(req.body);
        // res.json(bestMatch);
        res.redirect('/?user=' + (friendsArray.length - 1));
    });
};