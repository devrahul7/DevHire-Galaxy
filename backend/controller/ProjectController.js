const { request, response } = require("express");
const {Project} = require("../model/projectSchema");
const { where } = require("sequelize");

const createProject = async (request, response) => {
  const {
    title,
    category,
    duration,
    deadline_date,
    freelancer_type,
    freelancer_level,
    tags,
    skills,
    budget,
  } = request.body;

  //validartion all data
  if (
    !title ||
    !category ||
    !duration ||
    !deadline_date ||
    !freelancer_type ||
    !freelancer_level ||
    !tags ||
    !skills ||
    !budget
  ) {
    return response.json({
      message: "fill all require data",
      status: false,
    });
  }

  try {

  
  await Project.create({
    title: title,
    category:category,
    duration:duration,
    Deadline_date:deadline_date,
    freelancer_type:freelancer_type,
    freelancer_level:freelancer_level,
    tags:tags,
    skills:skills,
    budget:budget,
  })

  return response.json({
    message:"Project created successfully",
    status:false,
  })


}catch (error){
    return response.json({
        message:error,
        status: false
    })
}
};



// delete

const deleteProjectHandler = async (request, response) => {
const { id } = request.params;

if(typeof id !== "number"){
  return response.json({
    message:"Please give me your valid id",
    status:false,
  });
} 

try{
  await Project.destory({
    where:{
      id:id,
    },
  });
  return response.json({
    message:"Sucessfully deleted",
    status:false,
  });
}catch (error) {
  return response.json({
    message: error,
    status:false,
  });
}
}

//update 
const updateProjectHandler = async (request, response) =>{
  const { id } = request.params;
  const data = request.body;

  if(typeof id !== "number"){
    return response.json({
      message:"Please give me your valid id",
      status: false,
    });
  }
  try {
    await Project.update(data, {
      where: {
        id:id
      }
    }); 
    return response.json({
      message: "Sucessfully updated project ",
      status: true,
    });
  } catch (error) {
    return response.json({
      message: error,
      status: false,
    });
  }
};


// //get all project
const getAllProject = async (request, response) => {
  try {
    const allprojectdata = await Project.findAll();

    return response.json({
      message: "All fetched",
      data: allprofile,
      status: true,
    });
  } catch (error) {
    return response.json({
      message: error,

      status: false,
    });
  }
};

module.exports = {createProject,deleteProjectHandler, updateProjectHandler,getAllProject } 


