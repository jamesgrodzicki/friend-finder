const friendsData = require('../data/friends.js');
const friendsArray = friendsData.friendsArray;
const compatibility = friendsData.compatibility;

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendsArray);
    });

    app.post('/api/friends', function(req, res){
        let bestMatch = compatibility(req.body.scores, friendsArray);
        friendsArray.push(req.body);
        console.log(req.body);
        res.send(`\nName: ${bestMatch[0].name}\nAge: ${bestMatch[0].age}\nPhone Number: ${bestMatch[0].phoneNumber}`);
    });
};