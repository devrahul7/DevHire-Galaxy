const {sequalize, DataTypes} = require("sequelize")
const Freelancer_Profile = sequalize.define('freelencer_Profile',{

    id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    experties:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    experience:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    budget:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    skills:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

const sync = async()=>{
    try{
        await Freelancer_Profile.sync()
        console.log("Freelancer_Profile table created");
    } catch (error){
        console.log("error", error);
    }
}

sync();

module.exports= {};



