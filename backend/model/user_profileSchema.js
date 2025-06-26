const { Sequelize, DataTypes, STRING } = require("sequelize")

const Profile = sequalize.define('profile',{
    first_Name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    last_Name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phone_Number:{
        type:DataTypes.NUMBER,
        allowNull:false,
    },
    email_Address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    zip_Code:{
        type:DataTypes.NUMBER,
        allowNull:false,
    }
});

const sync = async()=>{
    try{
        await Profile.sync()
        console.log("Profile table created");
    } catch(error){
        console.log("error", error);
    }
}

sync();
module.exports = {Profile};

