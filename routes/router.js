const error = require("../helper/error")

class Router {
    routes = [];

    req
    res

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    get(path, method, handler) {
        this.routes.push({
            path: path,
            method: method.toUpperCase(),
            handler: handler
        })
    }

    post(path, method, handler) {
        this.routes.push({
            path: path,
            method: method.toUpperCase(),
            handler: handler
        })
    }

    put(path, method, handler) {
        this.routes.push({
            path: path,
            method: method.toUpperCase(),
            handler: handler
        })
    }

    delete(path, method, handler) {
        this.routes.push({
            path: path,
            method: method.toUpperCase(),
            handler: handler
        })
    }

    call(path, method) {
        try {
            let findRoute = this.routes.find(route => {
                return route.path === path && route.method === method;
            })
            if (!findRoute) {
                throw new error('not found', 404);
            }
            return findRoute.handler

        } catch (e) {
            this.res.writeHead(e.statusCode);
            this.res.write(e.message);
            this.res.end();
        }


    }
}


module.exports = Router;
