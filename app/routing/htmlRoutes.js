const path = require('path');
const friendsData = require('../data/friends.js');
const friendsArray = friendsData.friendsArray;
const compatibility = friendsData.compatibility;


module.exports = function(app){
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('*', function(req, res){
        const user = req.query.user;

        if (!user){
            return res.sendFile(path.join(__dirname, '../public/home.html'));
        } else {
            let bestMatch = compatibility(friendsArray);
            return res.render('index', {bestMatch: bestMatch})
        }

        // get user out of array
        // find best match
        // render that new thing
    });
};