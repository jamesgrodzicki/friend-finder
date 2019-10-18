const friendsData = require('../data/friends.js');
const friendsArray = friendsData.friendsArray;

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsArray);
    });

    // app.get('/', function(req, res){
        //     res.send(`\nYour Best Friend: ${bestMatch[0].name}\nAge: ${bestMatch[0].age}\nPhone Number: ${bestMatch[0].phoneNumber}`);
        // });
        
    app.post('/api/friends', function(req, res){
        friendsArray.push(req.body);
        console.log(req.body);
        // res.json(bestMatch);
        res.redirect('/?user=' + (friendsArray.length - 1));
    });
};