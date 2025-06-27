const { request, response } = require("express");
const {Profile} = require("../model/user_profileSchema");
const { Project } = require("../model/projectSchema");
const { where } = require("sequelize");

const createProfile = async(request,response) =>{
    const{
        first_Name,
        last_Name,
        phone_Number,
        email_Address,
        address,
        country,
        state,
        city,
        zip_Code,
    } = request.body;

    //Validation all data
    if(
        !first_Name||
        !last_Name||
        !phone_Number||
        !email_Address||
        !address||
        !country||
        !state||
        !city||
        !zip_Code
    ){
        return response.json({
            message:"fill all require data",
            status:false,
        });
    }

    try {
        await Project.createProfile({
            first_Name: first_Name,
            last_Name:last_Name,
            phone_Number:phone_Number,
            email_Address:email_Address,
            address:address,
            country:country,
            state:state,
            city:city,
            zip_Code:zip_Code,
        })
        return response.json({
            message:"Profile created successfully",
            status:false,
        })
    }catch(error){
        return response.json({
            message:error,
            status:false,
        })
    }

};

//delete
const deleteUser_ProfileHandler = async (request, response) =>{
    const { id } = request.params;

    if(typeof id !== "number"){
        return response.json({
            message:"Please give me your valid id",
            status:false,
        });
    }

    try{
        await deleteUser_ProfileHandler.destory({
            where:{
                id:id,
            },
        });

        return response.json({
            message:"Sucessfully delete user_profile",
            status:true,
        });
    } catch (error) {
        return response.json({
            message:error,
            status:false,
        });
    }
};

//update
const updateUser_ProfileHandler = async (request, response) =>{
    const { id } = request.params;
    const data = request.body;

    if(typeof id !== "number"){
        return response.json({
            message:"Please give me your valid id",
            status:false,
        });
    }

    if(!data){
        return response.json({
            message:"Please write down your all data",
            status:false,
        });
    }
    try {
        await User_Profile.update(data, {
            where:{
                id:id,
            },
        });

        return response.json({
            message:"Successfully updated user_profile",
            status:true,
        });

    }catch (error){
        return response.json({
            message:error,
            status:false,
        });
    }
};








// //get all freelancer profiles
// const getAllFreelancerProfiles = async (request, response) => {
//   try {
//     const allprofile = await Freelancer_Profile.findAll();

//     return response.json({
//       message: "All fetched",
//       data: allprofile,
//       status: true,
//     });
//   } catch (error) {
//     return response.json({
//       message: error,

//       status: false,
//     });
//   }
// };

// module.exports = {freelancerProfileHandler,deleteFreelancerProfileHandler, updateFreelancerProfileHandler,getAllFreelancerProfiles } 







