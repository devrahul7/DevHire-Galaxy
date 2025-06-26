const { Sequelize,DataTypes } = require("sequelize");
const Transation = sequalize.define('transation',{



id:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true,
    autoIncreament:true,
},
type:{
type:DataTypes.STRING,
allowNull:false,
},
paymentType:{
    type:DataTypes.DOUBLE,
    allowNull:false,
},
Amount:{
    type:DataTypes.DOUBLE,
    allowNull:false,
},
Fees:{
    type:DataTypes.DOUBLE,
    allowNull:false,
},
status:{
    type:DataTypes.STRING,
    allowNull:false,
}
}) 

const sync = async()=>{
    try{
        await Transation.sync()
        console.log("Transation table created");
    }catch(error){
        console.log("error",error);
    }
}

sync();

module.exports = { Transation};

