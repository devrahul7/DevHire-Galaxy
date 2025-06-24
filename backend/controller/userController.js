const { request } = require("express");
const {Users} = require("../model/userSchema");


// register {username, email, password} -> database (postgres)
const register = async (request,response) => {
   const {username, email, password} = await request.body

   // validation
   if(!username || !email || !password){
     return response.json({
        message: "please write down all your credientials",
        status: false,
     })
   }

   if(password >= 5){
     return response.json({
        message: "Password must be more then 5 character!!",
        status: false,
     })
   }


   // data check -> database
   await Users.create({
      username,
      email,
      password
   })

   return response.json({
      status: true,
      message: "account created successfuly"
   })

}



// login check -> datbase if milxa bhane -> dashbaord mildiana bhane -> error
// login {email address, password} -> database(postgres)


//validation






// getUserById -> id ? database check -> data return else error
const getUserById = async (request,response) => {
   const {id}= request.params

   const users = await Users.findOne({
      where: {
         id: id 
      }
   })


   if(!users){
      return response.json({
         message: "user not found!!",
         status: false
      })
   }

   return response.json({
      message: "user found",
      data: users,
      status: true
   })
   // locahost:5000/users/1

}
// forgot password
// reset password -> old password ? new password else error retry
// change profile -> old profile override new profile convert

module.exports = { register , getUserById};
