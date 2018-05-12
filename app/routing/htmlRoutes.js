const path = require("path");

htmlRoutes = function(expressApp) {
    expressApp.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    expressApp.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

module.exports = htmlRoutes;
