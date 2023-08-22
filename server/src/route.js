const UserController = require ('./controller/UserController')

module.exports = (app) => {
    //get all
    app.get('/users', UserController.index)

    //create
    app.post('/user', UserController.create)

    //edit
    app.put('/user/:userId', UserController.put)

    //delete
    app.delete('/user/:userId', UserController.delete)

    //show by id
    app.get('/user/:userId', UserController.show)

}