const redis = require('redis');
const dataBase = redis.createClient();

class DatabaseInterface {

    async Connection() {
        try {
            return await dataBase.connect();
        } catch (error) {
            console.log("error in Database");
        }
    }

    async connect() {
        let connect = await this.Connection();
        await dataBase.on("connect", (e) => {
            console.log(e)
        })
        return connect
    }

    async select(dbNumber) {
        try {
            await dataBase.select(dbNumber);
        } catch (e) {
            console.log(e)
        }
    }

    async insert(id, data) {
        try {
            await dataBase.set(String(id), data);
        } catch (e) {
            console.log(e)
        }
    }

    async update(id, data) {
        try {
            await dataBase.set(String(id), data);
        } catch (e) {
            console.log(e)
        }
    }

    async get(id) {
        try {
            return await dataBase.get(String(id));
        } catch (e) {
            console.log(e)
        }
    }

    async exists(id) {
        try {
            return await dataBase.exists(String(id));
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = DatabaseInterface