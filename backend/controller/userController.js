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
// forgot password
// forget password {email, newpassword} -> database(postgres)
const forgetPassword = async(request, response) => {
   const { email, newPassword } = request.body;

   const RESEND_KEY= "re_2AyXs46Z_NTWjT5q8ocynFrix1SgGYd8t"

   //Validation
   if(!email || newPassword){
      return response.json({
         status: false,
         message:"Email and new password are required.",
      });
   }



   if(newPassword.length <6){
      return response.json({
         status:false,
         message:"New password must be at least 6 characters"
      });
   }

   ///Check if user exists
   try {
      const user = await Users.findOne({ where: { email}});

      if(!user){
         return response.json({
            status:false,
            message: "User not found with this email."
         });
      }

     

      //update password
      await Users.update(
         {password: newPassword},
         { where: { email }}
      );

      return response.json({
         status:true,
         message:"Password reset successful.",
      });

   } catch (error){
      console.error("Forget password error:", error);
      return response.status(500).json({
         status: false,
         message:"Server error. please try again later.",
      });
   }
};


const bcrypt = require("bcrypt");


const resetPassword = async (request, response) => {
  const { email, oldPassword, newPassword } = request.body;
  
  // Step 1: Basic validation
  if (!email || !oldPassword || !newPassword) {
    return response.json({
      status: false,
      message: "Email, old password, and new password are required.",
    });
  }

  try {
    // Step 2: Find user by email only (not password)
    const user = await Users.findOne({
      where: {
        email: email
      }
    });
    // Step 3: Check if user exists
    if (!user) {
      return response.json({
        status: false,
        message: "User not found."
      });
    }

    console.log(user.dataValues);

    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.dataValues.password);
    
    if (!isOldPasswordValid) {
      return response.json({
        status: false,
        message: "Your old password doesn't match!"
      });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    
    await Users.update(
      { password: hashedNewPassword },
      { where: { email } }
    );

    return response.json({
      status: true,
      message: "Password reset successfully.",
    });

  } catch (error) {
    console.error("Reset password error:", error);
    return response.status(500).json({
      status: false,
      message: "Server error. Please try again later.",
    });
  }
};

// reset password
// user -> email, oldPassword,newPassword
//condition check 
// email fetch -> all data hashPassword 
//oldpassword and hashPassword check
// new password if reset set  
// password change bhayo




// admin login and register
//admin login

const adminlogin = async(request, response) => {
   const {email, password } = request.body;
   //validation : check if data are provided

   if(!email || !password){
      return response.json({
         status:false,
         message:"Please enter both email and password. ",
      });
   } //check user in database
   try{
      const user = await Users.findOne({
         where:{ email, password},
      });
      if(user){
         return response.json({
            status:true,
            message:"Login successful. redirecting to dashboard.."
         });
      }else{
            return response.json({
               status:false,
               message:"Invalid email or password.",
         });
      } 
   }catch(error){
      console.log("Login error:", error);
      return response(500).json({
         status:false,
         message:"Internal server error. Please try again later."  }) 
      }
    }



    // adminregister {username, email, password} -> database (postgres)
const adminregister = async (request,response) => {
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


module.exports = { login, register, getUserById, forgetPassword, resetPassword, adminlogin, adminregister };

    
    





