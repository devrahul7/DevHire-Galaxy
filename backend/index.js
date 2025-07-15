const express = require("express");
const {connection} = require("./database/db");
const {login, register, getUserById, forgetPassword, resetPassword , adminlogin, adminregister} = require("./controller/userController");
const {createProject,deleteProjectHandler, updateProjectHandler,getAllProject } = require("./controller/ProjectController")
const {createWebsite_Basic_Details,updateAdminSettingsHandler, deleteadminsettingsHandler, getAllAdminSettings} = require("./controller/adminsettingsController")
 const {freelancerProfileHandler,deleteFreelancerProfileHandler, updateFreelancerProfileHandler,getAllFreelancerProfiles} = require("./controller/freelancerprofileController")
 const {createReviews,deleteReviewsHandler, updateReviesHandler,getAllReviews }  = require("./controller/reviewsController.js")
const { showtransition, deleteTransationHandler, updateTransationHandler, getAllTransation } = require("./controller/transationController.js")
  const {createProfile,deleteUser_ProfileHandler, updateUser_ProfileHandler,getAllUser_Profile } = require("./controller/user_profileController.js")
const app = express();

const PORT = 5000;

connection()
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server ruuning port ${PORT}`);
});