const Router = require("./router");
const error = require("../helper/error");
const UserController = require("../Controller/userController")
const Routes = (req, res) => {
    let router = new Router(req,res);
    let userController = new UserController(req, res)
    router.get('/getUser', "get", (req, res) => {
        userController.getUser(req, res)
    });
    router.post('/addUser', "post", (req, res) => {
        userController.addUser(req, res)
    });
    router.put('/editUser', "put", (req, res) => {
        userController.editUser(req, res)
    });
    let callReq = router.call(req.url, req.method)
    if(callReq){
        callReq(req,res);
    }
}

module.exports = Routes