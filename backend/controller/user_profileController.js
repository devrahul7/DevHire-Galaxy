const { request } = require("express");
const {Profile} = require("../model/user_profileSchema");
const { Project } = require("../model/projectSchema");

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


