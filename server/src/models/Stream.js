const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


module.exports = (sequelize, DataTypes) => {
    const Stream = sequelize.define('Stream', {
        name: DataTypes.STRING,
        platform: DataTypes.STRING,
        quality: DataTypes.STRING,
        price: DataTypes.STRING,
        language_sub: DataTypes.STRING,
        language_dub: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })

    Stream.associate = function (models) {}

    return Stream
}