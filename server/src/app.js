let express = require('express')

const app = express()

 

app.get('/status', function (req,res){

    res.send('Hello nodejs server')

})

 

let port = 8081

app.get('/hello/:name', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

app.listen(port, function(){

    console.log('server running on ' + port)

})