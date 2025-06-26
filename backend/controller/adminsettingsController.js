const { response, request } = require("express");
const {website_Basic_Details} =require("../model/adminsettingsSchema");
const { freelancerProfileHandler } = require("./freelancerprofileController");
const { json } = require("sequelize");

const createWebsite_Basic_Details = async(request, response)=>{
    const {
        website_Name,
        logo
    } = request.body;

    //validation all data
    if(!website_Name||
        !logo
    ){
        return response.json({
            message:"fill all require data",
            status:false,
        });
    }
    try {
        await Project.createWebsite_Basic_Details({
            websiteName:website_Name,
               logo:logo
        })
        
    } catch (error) {
        return response.json({
            message:error,
            status:false

        })
        
    }
};

//delete
const deleteadminsettingsHandler = async (request, response) => {
const {id} = request.params;

if(typeof id !== "number"){
    return response.json({
        message:"Please give me your valid id",
        status:false,
    });
}

try{
    await adminSettings.destory({

        where:{
            id:id,
        },
    });

    return response.json({
        message:"Sucessfully delete adminSettings",
        status:true,
    });
}catch (error){
    return response,json({
        message:error,
        status:false,
    })
}
};

//update
const updateAdminSettingsHandler = async (request, response) =>{
    const { id } = request.params;
    const data  = request.body;

    if(typeof id !== "number"){
        return response.json({
            message:"Please give me your valid id",
            status:false,
        });
    }
    if(!data){
        return response.json({
            message:"Please give me your valid id",
            status:false,
        });
    }
    try {
        await adminSettings.update(data, {
            where:{
                id:id,
            },
        });

        return response.json({
            message:"Sucessfully updated profile",
            status:true,
        });
    } catch (error){
        return response.json({
            message:error,
            status:false,
        });
    }
};












