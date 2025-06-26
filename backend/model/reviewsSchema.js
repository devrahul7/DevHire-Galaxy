
const {sequalize, DataTypes}= require("sequelize")

const Reviews = sequalize.define('reviews',{


 id:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
 },
 images:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 username:{
    type:DataTypes.STRING,
    allowNull:false,
 },
 rating:{
    type:DataTypes.NUMBER,
    allowNull:false,
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



