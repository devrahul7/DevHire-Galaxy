const {Project} = require("../model/projectSchema")

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
