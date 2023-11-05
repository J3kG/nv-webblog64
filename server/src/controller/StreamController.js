const {Stream} = require('../models')

module.exports = {
    //get all user
    async index (req,res){
        try {
            const streams = await Stream.findAll()
            res.send(streams)
        } catch (error) {
            res.status(500).send({
                error: 'The streaming information was incorrect'
            })
        }
    },

    //create user
    async create (req,res) {
        try {
            const stream = await Stream.create(req.body)
            res.send(stream.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'The streaming information was incorrect'
            })
        }
    },

    //edit user
    async put (req,res){
        try {
            await Stream.update(req.body,{
                where: {
                    id: req.params.streamId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update streaming information was incorrect'
            })
        }
    },

    //delete user
    async delete (req, res){
        try {
            const stream = await Stream.findOne({
                where: {
                    id: req.params.streamId
                }
            })
            if (!stream){
                return res.status(403).send({
                    error: 'The streaming id is not found'
                })
            }
            await stream.destory()
            res.send(stream)
        } catch (error) {
            res.status(500).send({
                error: 'Delete streaming information was incorrect'
            })
        }
    },

    //show user by id
    async show (req,res){
        try {
            const stream = await Stream.findOne({
                where: {
                    id: req.params.streamId
                }
            })
            if (!stream){
                return res.status(403).send({
                    error: 'The streaming id is not found'
                })
            }
            res.send(stream)
        } catch (error) {
            res.status(500).send({
                error: 'Streaming information was incorrect'
            })
        }
    }
}