class error extends Error {
    static statusCode;

    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}

module.exports = error