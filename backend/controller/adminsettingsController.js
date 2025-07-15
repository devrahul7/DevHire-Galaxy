const { response, request } = require("express");
const {website_Basic_Details} =require("../model/adminsettingsSchema");

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
        await website_Basic_Details.create({
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
    await website_Basic_Details.destory({

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
        await website_Basic_Details.update(data, {
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

//get all adminSettings

const getAllAdminSettings = async (request, response) =>{
    try{
        const allprofile = await website_Basic_Details.findAll();
    
        return response.json({
            message:"All fetched",
            data:allprofile,
            status:true,
        });
    } catch (error) {
        return response.json({
            message:error,
            status:false,
        });
    }
};

module.exports={createWebsite_Basic_Details, deleteadminsettingsHandler, updateAdminSettingsHandler, getAllAdminSettings}


