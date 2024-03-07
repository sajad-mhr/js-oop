const userModel = require('../Model/userModel');
const getBody = require("../utilities/getBody");
const response = require('../helper/response')


class UserController {
    req;
    res;

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getUser(req, res) {
        try {
            let id = 1
            let result = await userModel.getUser(id);
            let exists = await userModel.userExists(id);
            if (!exists) {
                response(res, 404, "یافت نشد")
                return;
            }
            response(res, 200, result);
        } catch (e) {
            console.log(e)
        }
    }

    async addUser(req, res) {
        const data = await getBody(req);
        try {
            let exists = await userModel.userExists(data.id);
            if (exists) {
                response(res, 409, "user already exists")
                return;
            }

            await userModel.insertUser(data.id, JSON.stringify(data));
            response(res, 200, "user added")
        } catch (e) {
            response(res, 500, "error")
        }

    }

    async editUser(req, res) {
        const data = await getBody(req);
        let id = 2;
        let obj = {
            id: id,
            name: data.name,
            age: data.age
        }
        try {
            let exists = await userModel.userExists(id);
            if (!exists) {
                response(res, 409, "user not found")
                return;
            }
            await userModel.editUser(id, JSON.stringify(obj));
            response(res, 200, "user edit")
        } catch (e) {
            response(res, 500, "error")
        }

    }
}

module.exports = UserController