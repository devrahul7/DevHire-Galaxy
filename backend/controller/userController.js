const { request, response } = require("express");
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


const login = async(request, response) => {
   const {email, password} = request.body;


//validation: check if fields are provided
if(!email || !password){
   return response.json({
      status:false,
      message: "Please enter both email and password.",
   });
}


//check user in database
try{
const user = await Users.findOne({
   where: {email, password},
});

if(user){
   return response.json({
      status:true,
      message: "Login successful. Redirecting to dashboard..",
   });
} else{
   return response.json({
      status: false,
      message:"Invalid email or password.",
   });
}


}catch(error){
   console.error("Login error:", error);
   return response.status(500).json({
      status:false,
      message:"Internal server error. Please try again later.",
   })
}

}




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



// reset password -> old password ? new password else error retry
// change profile -> old profile override new profile convert

module.exports = { login,register , getUserById};
