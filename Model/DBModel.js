const redis = require('redis');
const dataBase = redis.createClient();

class DBModel {
    async connect() {
        try {
            await dataBase.connect();
            await dataBase.on("error", (err) => {
                console.log("Redis Client Error dataBase ", err);
                dataBase.quit();
            });
            await dataBase.on("connect", () => {
                console.log("connected dataBase");
            });
        } catch (error) {
            console.log("error in Database");
        }
    }

    async insert(dbName,data) {
        await dataBase.select(dbName)
        await dataBase.hSet(`user:${data.id}`, {
            name: data.name,
            age: data.age
        })
    }
    async update(dbName,id,data) {
        await dataBase.select(dbName)
        await dataBase.hSet(`user:${id}`, {
            name: data.name,
            age: data.age
        })
    }
    async get(dbName,id){
        await dataBase.select(dbName)
        return await dataBase.hGetAll(`user:${id}`);
    }
}

module.exports = DBModel