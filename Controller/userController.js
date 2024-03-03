const error = require("../helper/error");
const dataBase = require('../Model/DBModel')

let db = new dataBase()

class UserController {
    req;
    res;

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getUser(req, res) {
        let data = await db.get(0,2);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(data));
        res.end();
    }

    addUser(req, res) {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            try {
                let parsedData = JSON.parse(data)
                if (!parsedData.id) {
                    throw new error('id required', 400);
                }
                if (!parsedData.name) {
                    throw new error('name required', 400);
                }
                if (!parsedData.age) {
                    throw new error('age required', 400);
                }
                db.insert(0, parsedData);
                res.writeHead(200, {"Content-Type": "application/json"});
                res.write(data);
                res.end();
            } catch (e) {
                res.writeHead(e.statusCode);
                res.write(e.message);
                res.end();
            }
        })
    }
    editUser(req, res) {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            try {
                let parsedData = JSON.parse(data)
                if (!parsedData.name) {
                    throw new error('name required', 400);
                }
                if (!parsedData.age) {
                    throw new error('age required', 400);
                }
                db.update(0,1, parsedData);
                res.writeHead(200, {"Content-Type": "application/json"});
                res.write(data);
                res.end();
            } catch (e) {
                res.writeHead(e.statusCode);
                res.write(e.message);
                res.end();
            }
        })
    }
}

module.exports = UserController