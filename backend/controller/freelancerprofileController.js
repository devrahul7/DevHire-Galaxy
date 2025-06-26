const { Freelancer_Profile } = require("../model/freelancerprofileSchema");

// create
const freelancerProfileHandler = async (request, response) => {
  const { name, experties, description, experience, budget, location, skills } =
    request.body;

  // Validate all fields
  if (
    !name ||
    !experties ||
    !description ||
    !experience ||
    !budget ||
    !location ||
    !skills
  ) {
    return response.json({
      message: "Please fill all required data.",
      status: false,
    });
  }

  try {
    await Freelancer_Profile.create({
      name,
      experties,
      description,
      experience,
      budget,
      location,
      skills,
    });

    return response.json({
      message: "freelancer_Profile created successfully",
      status: true,
    });
  } catch (error) {
    return response.json({
      message: error,
      status: false,
    });
  }
};

// delete 
const deleteFreelancerProfileHandler = async (request, response) => {
  const { id } = request.params;

  if (typeof id !== "number") {
    return response.json({
      message: "Please give me your valid id",
      status: false,
    });
  }

  try {
    await Freelancer_Profile.destroy({
      where: {
        id: id,
      },
    });

    return response.json({
      message: "Sucessfully delete profile ",
      status: true,
    });
  } catch (error) {
    return response.json({
      message: error,
      status: false,
    });
  }
};

// update
const updateFreelancerProfileHandler = async (request, response) => {
  const { id } = request.params;
  const data = request.body;

  if (typeof id !== "number") {
    return response.json({
      message: "Please give me your valid id",
      status: false,
    });
  }

  if (!data) {
    return response.json({
      message: "Please write down your all data",
      status: false,
    });
  }

  try {
    await Freelancer_Profile.update(data, {
      where: {
        id: id,
      },
    });

    // update(data, where id: id)

    return response.json({
      message: "Sucessfully updated profile ",
      status: true,
    });
  } catch (error) {
    return response.json({
      message: error,
      status: false,
    });
  }
};


//get all freelancer profiles
const getAllFreelancerProfiles = async (request, response) => {
  try {
    const allprofile = await Freelancer_Profile.findAll();

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

module.exports = {freelancerProfileHandler,deleteFreelancerProfileHandler, updateFreelancerProfileHandler,getAllFreelancerProfiles } 


