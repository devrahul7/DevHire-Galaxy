
const { DataTypes}= require("sequelize")
const {sequalize} = require("../database/db.js")

const Reviews = sequalize.define('reviews',{


 id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  autoIncrement: true,
  primaryKey: true
},

 images:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 username:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 rating: {
  type: DataTypes.INTEGER, 
},

 message:{
    type:DataTypes.STRING,
    allowNull:false,
 }
 });

 const sync = async() => {
    try{
        await Reviews.sync()
        console.log("Reviews table created");

    }catch(error){
        console.log("error",error);
    }
 }
 sync();

 module.exports = {Reviews};



