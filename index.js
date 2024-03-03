const http = require('http')
const error = require("./helper/error")
const Router = require("./routes/router");
const Routes = require("./routes/routes");
const dataBase = require('./Model/DBModel')

let db = new dataBase()
db.connect();
function handler(req, res) {
    Routes(req, res);
}

let server = http.createServer(handler)

server.listen(3000)