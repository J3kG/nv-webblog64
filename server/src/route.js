const StreamController = require ('./controller/StreamController')

module.exports = (app) => {
    //get all
    app.get('/streams',
    StreamController.index)

    //create
    app.post('/stream', StreamController.create)

    //edit
    app.put('/stream/:streamId', StreamController.put)

    //delete
    app.delete('/stream/:streamId', StreamController.delete)

    //show by id
    app.get('/stream/:streamId', StreamController.show)

}