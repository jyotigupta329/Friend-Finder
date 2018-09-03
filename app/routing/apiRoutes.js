

var friends = require("../data/friends");


function apiRoutes(app, path) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        // console.log(res.json(friends));
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        var userInfo = req.body;
        var differenceArr = [];

        for (var i = 0; i < friends.length; i++) {
            var difference = 0
            for (var j = 0; j < friends[i].scores.length; j++) {
                difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInfo.scores[j]));
            }
            differenceArr.push(difference);
        }

        var matchIndex = differenceArr.indexOf(Math.max(...differenceArr));
        var match = friends[matchIndex];
        res.json(match);

    })

}

module.exports = apiRoutes;