const {sequalize, DataTypes} = require("sequelize")

const Job = sequalize.define('job', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {

    },

    description: {},
    experience: {},
    price: {},
    





}) 