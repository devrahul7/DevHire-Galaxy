const {DataTypes} = require("sequelize");
const {sequalize} = require("../database/db.js")


const Website_basic_details = sequalize.define('website_basic_details',{

        websiteName:{
            type:DataTypes.STRING,
            allowNull:false,   
        },
        logo:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });

const sync = async()=>{
    try{
        await Website_basic_details.sync()
        console.log("Website_basic_details table created");
    } catch (error){
        console.log("error",error);
    }
}

sync();

module.exports= {Website_basic_details};



