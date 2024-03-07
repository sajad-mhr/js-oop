const http = require('http')
const Routes = require("./routes/routes");
const database = require('./Model/databaseInterface')
let db = new database()
db.connect()
const PORT = process.env.PORT || 8080
console.log(PORT)

class Server {
    async handler(req, res) {
        try {

            Routes(req, res);


        } catch (e) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write("مشکلی پیش آمده است");
            res.end();
        }
    }

    start() {
        let server = http.createServer(this.handler);
        server.listen(PORT);

    }
}

module.exports = new Server();
