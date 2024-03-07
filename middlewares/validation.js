const Ajv = require("ajv");
const response = require('../helper/response')
const ajv = new Ajv();

class Validation {
    constructor(schema, data) {
        this.schema = schema;
        this.data = data;
    }

    validator(req, res, next) {
        const validate = ajv.compile(this.schema);
        const valid = validate(this.data);
        console.log(valid)
        if (!valid) {
            response(res, 400, JSON.stringify(validate.errors))
            return
        }
        next()
    }
}



module.exports = Validation;
