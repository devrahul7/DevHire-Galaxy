

const {Reviews} = require("./model/reviewsSchema");
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
