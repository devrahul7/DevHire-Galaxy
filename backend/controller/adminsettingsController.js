const {website_Basic_Details} =require("../model/adminsettingsSchema");

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

