// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var swaggerUi = require("swagger-ui-express");
var swaggerDoc = require("./swagger.json");

// Setting express 
var app = express();
var PORT = process.env.PORT || 3000;

// Express handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connecting files
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

app.use(express.static("app/public"));
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
htmlRoutes(app, path);
apiRoutes(app, path);


app.listen(PORT, function () {
    console.log("App is listning on PORT" + PORT);
});

