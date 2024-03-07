const DatabaseInterface = require("./databaseInterface")

class UserModel extends DatabaseInterface {

    async insertUser(id, data) {
        await super.select(1);
        await super.insert(id, data);
    }

    async getUser(id) {
        await super.select(1);
        return await super.get(id);
    }

    async editUser(id,data){
        await super.select(1);
        return await super.update(id,data)
    }

    async userExists(id){
        await super.select(1);
        return await super.exists(id)
    }


}

module.exports = new UserModel();