const {Sequelize} = require("sequelize");

const sequalize = new Sequelize("postgres","postgres","postgres",{
dialect:"postgres",
host:"localhost"
})

const connection = async ()=>{
  try{
    await sequalize.authenticate();
    console.log(" connection has been login sucessfully")
  }catch(error){
    console.log(error)
  }
}

module.exports = {connection, sequalize}