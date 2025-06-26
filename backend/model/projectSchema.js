const {sequalize, DataTypes} = require("sequelize")

const Project = sequalize.define('project', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type:DataTypes.STRING,
        allowNull:false,


    },
    category:{
       type:DataTypes.STRING,
       allowNull:false, 

    },
    duration:{
        type:DataTypes.TIME,
        allowNull:false,
    },
Deadline_date:{
    type:DataTypes.DATE,
    allowNull:false,


},
freelancer_type:{
    type:DataTypes.STRING,
    allowNull:false,


},
freelancer_level:{
    type:DataTypes.STRING,
    allowNull:false,

},
tags:{
    type:DataTypes.STRING,
    allowNull:false,

},
skills:{
    type:DataTypes.ARRAY,
    allowNull:false,

},
budget:{
    type:DataTypes.JSON,
    allowNull:false,
}
}) 

const sync = async()=>{

    try {
        
        await Project.sync()
        console.log("Project table created");
    } catch (error) {
        console.log("error",error);
    }
  

}

sync();

module.exports= {Project};