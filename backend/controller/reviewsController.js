

const { request, response } = require("express");
const {Reviews} = require("../model/reviewsSchema.js");
const { json } = require("sequelize");
const createReviews = async(request,response) =>{
    const {
        images,
        username,
        rating,
        message
    } = request.body;
//validation all data
    if(
        !images||
        !username||
        !rating||
        !message
    ){
        return response.json({
            message:"fill all require data",
            status:false,
        });
    }

    try{
        await Reviews.create({
           images:images,
           username:username,
           rating:rating,
           message:message,
        })
        return response.json({
            message:"Reviews successfully",
            status:false,
        })
    }catch(error){
        return response.json({
            message:error,
            status:false
        })
    }
}


//delete

const deleteReviewsHandler = async (request, response) => {
    const { id } = request.params;

    if(typeof id !== "number"){
        return response.json({
            message:"Please give me your valid id",
            status:false,
        });
    }

    try{
        await Reviews.destroy({
            where: {
                id:id,
            },
        });

        return response.json({
            message:"Sucessfully delete reviews data",
            status:true,
        });
    } catch (error){
        return response.json({
            message:error,
            status:false,

        });
    }
};

// update 
const updateReviesHandler = async (request, response) => {
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
            message:"Please give me your valid id",
            status:false,
        });
    }

    try{
        await Reviews.update(data,{
            where:{
                id:id,
            },
        });

        return response.json({
            message:"Successfully updated reviews data",
            status:true,
        });
    } catch (error) {
        return response.json({
            message:error,
            status:false,
        });
    }
}

//get all reviews data

const getAllReviews = async (request, response) => {
     try {
    const allprofile = await Reviews.findAll();

    return response.json({
      message: "All fetched",
      data: Reviews,
      status: true,
    });
  } catch (error) {
    return response.json({
      message: error,

      status: false,
    });
  }
};

module.exports = {createReviews,deleteReviewsHandler, updateReviesHandler,getAllReviews } 








 
