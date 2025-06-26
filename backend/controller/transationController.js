const { request, response } = require("express")
const {Transation} = require("../controller/model/transationSchema")
const showtransition = async(request, response) => {
    const {
        type,
        paymentType,
        amount,
        fees,
        status
    } = request.body;

    //validation all data
    if(
          !type||
        !paymentType||
        !amount||
        !fees||
        !status
    ){
        return response.json({
            message:"fill all require data",
            status:false,
        });
    }

    try {
        await Transation.create({type:type,
            paymentType:paymentType,
            Amount:amount,
            Fees:fees,
            status:status
        })
        return response.json({
            message:"Transation successfully",
            status:false,

        })
        
    } catch (error) {
        return response.json({
            message:error,
            status:false
        })
    }
};


