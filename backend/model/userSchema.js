const { DataTypes} = require('sequelize')
const {sequalize} = require("../database/db.js")

const Users = sequalize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allownull: false,
    },
    
    email: {
        type: DataTypes.STRING,
        allownull: false,
    },

    password: {
        type: DataTypes.STRING,
        allownull: false,
    },
    forgotPasswordCode: {
        type: DataTypes.INTEGER,
        allowNull: true
        //code : 1232143
    }
})


const SyncUsers = async () => {
    try{
        await Users.sync()
        console.log("table create successfuly")
    }catch(error){
        console.log(error)
    }

}
SyncUsers()

module.exports = {Users}